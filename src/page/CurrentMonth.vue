<template>
  <main>
    CrrentMonth {{go}}
  </main>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import _ from 'partial-js';

@Component({
 components: {
 },
 computed: mapGetters({
 }),
})
export default class CrrentMonth extends Vue {
  add(a: number, b: number) {
    return a + b;
  }
  add10 = _(this.add, 10);

  go = _.go(
    10,
    (a: number) => a * 10,
    (a: number) => a - 50,
    (a: number) => a + 10,
  )
}
</script>