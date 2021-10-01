<template>
  <div class="app" :class="{ 'editor-page': $route.name === 'DashboardEditor' || $route.name === 'ProcessEditor' }">
    <AppHeader />
    <div class="container-fluid">
      <div class="row">
        <AppSidebar v-if="$route.name !== 'DashboardEditor' && $route.name !== 'ProcessEditor'" />
        <main class="ms-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { AppHeader, AppSidebar } from '../components/index';

@Component({
  components: {
    AppHeader,
    AppSidebar,
  },
})
export default class Full extends Vue {}
</script>