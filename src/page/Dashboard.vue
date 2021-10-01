<template>
  <main>
    Dashboard
  </main>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
 components: {
 },
 computed: mapGetters({
 }),
})
export default class Dashboard extends Vue {
}
</script>