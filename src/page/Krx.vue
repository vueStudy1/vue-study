<template>
  <main>
    <KrxAll v-model="krxAll"/>
    <KrxIndividual v-model="krxIndividual"/>
    <LineChart/>
  </main>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import KrxAll from '@/components/Button/KrxAll.vue';
import KrxIndividual from '@/components/Button/KrxIndividual.vue';
import LineChart from '@/components/Chart/LineChart.vue';

@Component({
 components: {
   KrxAll,
   KrxIndividual,
   LineChart,
 },
 computed: mapGetters({
 }),
})
export default class Krx extends Vue {
  krxAll: any = null;
  krxIndividual: any = null;
}
</script>

<style scoped>
</style>