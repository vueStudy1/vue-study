<template>
  <div class="ipr-loading" v-show="showLoading">
    <div class="box-loading" width="60" height="60" alt="loading" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { EventBus } from '@/common';

@Component({})
export default class AppLoading extends Vue {
  showLoading: boolean = false;

  created() {
    EventBus.$on('onLoading', () => {
      this.showLoading = true;
    });
    EventBus.$on('offLoading', () => {
      this.showLoading = false;
    });
  }

  beforeDestroy() {
    EventBus.$off('onLoaindg');
    EventBus.$off('offLoaindg');
  }
}
</script>
