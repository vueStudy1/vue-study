<template>
  <main>
    Customers
    <DaumRank v-model="daumRank"/>
    <DaumPopular v-model="daumPopular"/>
    <DaumSearch v-model="daumSearch"/>
    <DaumDetailSearch v-model="daumDetailSearch"/>
    <DaumDays v-model="daumDays"/>
    <DaumTimes v-model="daumTimes"/>
  </main>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import DaumRank from '@/components/Button/DaumRank.vue';
import DaumPopular from '@/components/Button/DaumPopular.vue';
import DaumSearch from '@/components/Button/DaumSearch.vue';
import DaumDetailSearch from '@/components/Button/DaumDetailSearch.vue';
import DaumDays from '@/components/Button/DaumDays.vue';
import DaumTimes from '@/components/Button/DaumTimes.vue';

@Component({
 components: {
   DaumRank,
   DaumPopular,
   DaumSearch,
   DaumDetailSearch,
   DaumDays,
   DaumTimes,
 },
 computed: mapGetters({
 }),
})
export default class Customers extends Vue {
  daumRank: any = null;
  daumPopular: any = null;
  daumSearch: any = null;
  daumDetailSearch: any = null;
  daumDays: any = null;
  daumTimes: any = null;
}
</script>