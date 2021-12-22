<template>
  <div>
    <AppHeader2 />
    <article class="app-body">
      <router-view></router-view>
    </article>
    <AppSidebar2 />

    <!-- <div class="container-fluid">
      <div class="row">
        <AppSidebarHoon v-if="$route.name.includes('Hoon')" />
        <AppSidebarJaeeun v-else-if="$route.name.includes('Jaeeun')" />
        <AppSidebarJian v-else-if="$route.name.includes('Jian')" />
        <AppSidebarJiwon v-else-if="$route.name.includes('Jiwon')" />
        <AppSidebarSewon v-else-if="$route.name.includes('Sewon')" />
        <AppSidebarSoo v-else-if="$route.name.includes('Soo')" />
        <AppSidebarYoungkyun v-else-if="$route.name.includes('Youngkyun')" />
        <AppSidebar v-else />
        <main class="ms-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
article {
  width: calc(100vw - 150px);
  height: calc(100vh - 56px);
  position: fixed;
  top: 56px;
  left: 150px;
  background-color: rgba(0, 0, 0, 0.842);
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { AppHeader, AppHeader2, AppSidebar, AppSidebar2, AppSidebarHoon, AppSidebarJaeeun, AppSidebarJian, AppSidebarJiwon, AppSidebarSewon, AppSidebarSoo, AppSidebarYoungkyun } from '../components/index';

@Component({
  components: {
    AppHeader,
    AppHeader2,
    AppSidebar,
    AppSidebar2,
    AppSidebarHoon,
    AppSidebarJaeeun,
    AppSidebarJian,
    AppSidebarJiwon,
    AppSidebarSewon,
    AppSidebarSoo,
    AppSidebarYoungkyun,
  },
})
export default class Full extends Vue {
}
</script>