<template>
  <b-container class="common-component page-component">
    <div class="page-content">
      <div class="content-header">
        <div class="ico-error" alt="에러 이미지"></div>
      </div>
      <div class="content-body">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <span>Sorry, Page Not Found. Go Back or Home Please.</span>

        <b-btn-group>
          <b-button variant="secondary" @click="onClickBack()">Go Back</b-button>
          <b-button variant="primary" @click="onClickHome()">Home</b-button>
        </b-btn-group>
      </div>
    </div>
  </b-container>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class PageNotFound extends Vue {
  onClickBack() {
    this.$router.go(-1);
  }

  onClickHome() {
    this.$router.push('/');
  }
}
</script>
