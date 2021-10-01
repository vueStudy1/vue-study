<template>
  <div>
    <button class="btn btn-outline-secondary" type="button" @click="onClick">DaumDetailSearch</button>
    <button class="btn btn-outline-secondary" type="button" @click="onClear">clear</button>
    <input type="text" v-model="data.code"/>
    
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
export default class DaumDetailSearch extends Vue {
	data:any = {
		code: 'A303530',
	};

  async onClick() {
    const daumDetailSearch = await this.$store.dispatch('common/daumDetailSearch', this.data);
    this.$emit('input', [daumDetailSearch.data]);
  }

  onClear = () => this.$emit('input', null);
}
</script>
