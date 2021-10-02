<template>
  <div>
    <Kospi />
  </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import Kospi from './components/Kospi.vue';

@Component({
 components: {
  Kospi,
 },
 computed: mapGetters({
 }),
})
export default class Youngkyun extends Vue {
}
</script>