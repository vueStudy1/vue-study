<template>
  <div class="app">
    <div class="main pusher" style="margin-left: 0 !important">
      <div class="contents-components">
        <div class="browser-component qna-component">
          <div class="container browser-content">
            <div class="logo-ipr-fullname" alt="IOChord Process Re-Engineering logo"></div>
            <h5 v-html="$t('view.common.alert.notSupported')"></h5>
            <!-- <h5>해당 브라우저는 서비스를 지원하지 않습니다.</h5>
            <h5>엣지 또는 크롬 브라우저를 사용하시기 바랍니다.</h5> -->

            <div class="logo-component">
              <div class="logo-content">
                <div class="logo-edge" alt="엣지 로고" @click="onClickEdge" style="cursor: pointer"></div>
                <span>Edge</span>
              </div>
              <div class="logo-content">
                <div class="logo-chrome" alt="크롬 로고" @click="onClickChrome" style="cursor: pointer"></div>
                <span>Chrome</span>
              </div>
              <div class="logo-content">
                <div class="logo-firefox" alt="파이어폭스 로고" @click="onClickFirefox" style="cursor: pointer"></div>
                <span>Firefox</span>
              </div>
            </div>
          </div>

          <div class="content-footer">
            <b-container class="inf-component">
              <div class="logo-iochord" alt="아이오코드 로고"></div>
              <div class="inf-content">
                <div class="company-name">
                  <h4 desc="회사이름">{{ $t('view.sso.qna.companyName') }}</h4>
                </div>
                <div class="company-addr">
                  <span desc="부산주소">{{ $t('view.sso.qna.addressBusan') }}</span>
                  <span desc="서울주소">{{ $t('view.sso.qna.addressSeoul') }}</span>
                </div>
                <div class="company-inf">
                  <span desc="회사이메일">{{ $t('view.sso.qna.companyEmail') }}</span>
                  <span desc="회사번호">{{ $t('view.sso.qna.companyDigits') }}</span>
                </div>
              </div>
            </b-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class UnSupported extends Vue {
  onClickEdge() {
    window.location.href = 'https://www.microsoft.com/edge';
  }
  onClickChrome() {
    window.location.href = 'https://www.google.com/chrome';
  }
  onClickFirefox() {
    window.location.href = 'https://www.mozilla.org/firefox';
  }
}
</script>