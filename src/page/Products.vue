<template>
  <main>
    Products
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
export default class Products extends Vue {
}
</script>