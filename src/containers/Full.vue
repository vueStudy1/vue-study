<template>
  <div class="app" :class="{ 'editor-page': $route.name === 'DashboardEditor' || $route.name === 'ProcessEditor' }">
    <AppHeader />
    <div class="container-fluid">
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
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { AppHeader, AppSidebar, AppSidebarHoon, AppSidebarJaeeun, AppSidebarJian, AppSidebarJiwon, AppSidebarSewon, AppSidebarSoo, AppSidebarYoungkyun } from '../components/index';

@Component({
  components: {
    AppHeader,
    AppSidebar,
    AppSidebarHoon,
    AppSidebarJaeeun,
    AppSidebarJian,
    AppSidebarJiwon,
    AppSidebarSewon,
    AppSidebarSoo,
    AppSidebarYoungkyun,
  },
})
export default class Full extends Vue {}
</script>