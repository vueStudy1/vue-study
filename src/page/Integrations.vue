<template>
  <main>
    Integrations
    <button-list/>
  </main>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import ButtonList from '@/components/ButtonList.vue'

@Component({
 components: {
   ButtonList,
 },
 computed: mapGetters({
 }),
})
export default class Integrations extends Vue {
}
</script>