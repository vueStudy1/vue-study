<template>
  <div class="app">
    <AppHeader />
    <div class="app-body">
      <main class="main pusher">
        <div class="contents-components">
          <router-view></router-view>
        </div>
      </main>
    </div>

    <notifications group="error" :duration="5000" :width="500" position="top left" />
  </div>
</template>

<style scoped>
.sidebar-fixed .main {
  margin-left: 0 !important;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { AppHeader, AppSidebar } from '../components/index';

@Component({
  components: {
    AppHeader,
    AppSidebar,
  },
})
export default class FullMain extends Vue {}
</script>
