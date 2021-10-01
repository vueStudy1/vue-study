<template>
	<div class="input-group">
		<select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" v-model="data.code">
			<option selected>Choose...</option>
			<option value="A303530">A303530</option>
			<option value="A005930">삼성전자</option>
			<option value="A035420">네이버</option>
			<option value="A035720">카카오</option>
		</select>
		<button class="btn btn-outline-secondary" type="button" @click="onClick">DaumDays</button>
    <button class="btn btn-outline-secondary" type="button" @click="onClear">clear</button>
		<b-table striped hover :items="$attrs.value"></b-table>
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
export default class DaumDays extends Vue {
	data:any = {
		code: 'A303530',
	};

  async onClick() {
    const daumDays = await this.$store.dispatch('common/daumDays', this.data);
    this.$emit('input', daumDays.data.data);
  }

  onClear() {
    this.$emit('input', null);
  }
}
</script>