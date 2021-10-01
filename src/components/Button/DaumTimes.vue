<template>
	<div class="input-group">
		<select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" v-model="data.code">
			<option selected>Choose...</option>
			<option value="A303530">A303530</option>
			<option value="A005930">삼성전자</option>
			<option value="A035420">네이버</option>
			<option value="A035720">카카오</option>
		</select>
		<button v-if="loading" class="btn btn-outline-secondary" type="button" disabled>
			<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
			Loading...
    </button>
		<button v-else class="btn btn-outline-secondary" type="button" @click="onClick">DaumTimes</button>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  components: {
  },
  computed: mapGetters({
  }),
})
export default class DaumTimes extends Vue {
  loading: boolean = false;
	data:any = {
		code: 'A303530',
	};

  async onClick() {
    this.loading = true;
    const daumTimes = await this.$store.dispatch('common/daumTimes', this.data);
    this.$emit('input', daumTimes.data.data);
    this.loading = false;
  }
}
</script>