<template>
  <main>
    Tensorflow {{a}}
  </main>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import tf from '@tensorflow/tfjs';

@Component({
 components: {
 },
 computed: mapGetters({
 }),
})
export default class Tensorflow extends Vue {
  a: any = tf.tensor([1, 2, 3, 4])
}
</script>