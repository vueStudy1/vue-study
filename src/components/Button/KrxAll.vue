<template>
  <div class="input-group">
		<input type="text" class="form-control" placeholder="date" aria-label="date" v-model="data.date">
    <button v-if="loading" class="btn btn-outline-secondary" type="button" disabled>
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Loading...
    </button>
    <button v-else class="btn btn-outline-secondary" type="button" @click="onClick">KrxAll</button>
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
export default class KrxAll extends Vue {
  loading = false;
  data:any = {
		date: '20210915',
	};

  async onClick() {
    this.loading = true;
    const krxAll = await this.$store.dispatch('common/krxAll', this.data);
    this.$emit('input', krxAll.data.OutBlock_1);
    this.loading = false;
  }
}
</script>
