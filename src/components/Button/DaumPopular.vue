<template>
  <div>
    <button type="button" class="btn btn-primary" @click="onClick">DaumPopular</button>
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
export default class DaumPopular extends Vue {
  async onClick() {
    const daumPopular = await this.$store.dispatch('common/daumPopular');
    this.$emit('input', daumPopular.data.data);
  }
}
</script>
