<template>
  <div>
    <button type="button" class="btn btn-primary" @click="onClick">DaumRank</button>
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
export default class DaumRank extends Vue {
  async onClick() {
    const daumRank = await this.$store.dispatch('common/daumRank');
    this.$emit('input', daumRank.data.data);
  }
}
</script>
