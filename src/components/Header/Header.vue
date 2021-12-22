<template>
<header>
  <div class="nav">
    <div class="item" @click="active = 'Youngkyun'; $router.push({name : 'Youngkyun'});" :class="{active : active == 'Youngkyun'}">정영균</div>
    <div class="item" @click="active = 'pack'" :class="{active : active == 'pack'}">박아름</div>
    <div class="item" @click="active = 'dong';" :class="{active : active == 'dong'}">동그리</div>
    <div class="item" @click="active = 'nyang';" :class="{active : active == 'nyang'}">냥냥이</div>
    <!-- 시간제한만 걸려있는데, 날짜 제한도 걸어야 함. -->
    <!-- <div><b-button @click="modalShow = !modalShow" :disabled="!isTime">firebase server save</b-button></div> -->
    <div><b-button @click="modalShow = !modalShow">firebase server save</b-button></div> <!-- 제한 품 -->
    <DataUpload ref="modal" v-model="modalShow"/>
  </div>
</header>
  <!-- <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#" v-b-toggle.sidebar-1>Home</b-nav-item>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar> -->

  <!-- <div>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">vue study</a>
      
      <div class="navbar-nav">
        <b-button @click="onClickSave">저장하기</b-button>
      </div>

      <div class="navbar-nav">
        <b-input-group>
          <b-button variant="outline-success" @click="run()">run</b-button>
          <b-dropdown class="mx-1" :text="proxyText">
            <b-dropdown-item @click="onProxy('proxy')">proxy</b-dropdown-item>
            <b-dropdown-item @click="onProxy('proxy1')">proxy1</b-dropdown-item>
            <b-dropdown-item @click="onProxy('proxy2')">proxy2</b-dropdown-item>
            <b-dropdown-item @click="onProxy('proxy3')">proxy3</b-dropdown-item>
          </b-dropdown>
          <b-dropdown class="mx-1" :text="buttonText">
            <template v-for="code, index in codes">
              <b-dropdown-item :key="index" @click="onClick(`${code.symbolCode}`, `${code.sectorName}`)">{{code.sectorName}}</b-dropdown-item>
            </template>
          </b-dropdown>
          <b-button variant="outline-success" @click="onClickSave()">save</b-button>
        </b-input-group>
      </div>
    </header>
    <b-progress v-if="per!=0 && per!=100" :value="per" variant="info"></b-progress>
  </div> -->
</template>
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 32px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  z-index: 1;
}
header .logo {
  position: absolute;
  left: 0;
  top: 0;
  width: 156px;
  height: 34px;
  padding: 11px 0 0 19px;
  z-index: 30;
  overflow: hidden;
  font-size: 17px;
  font-weight: bolder;
  color: #b2b2b2;
}
header .nav {
  position: relative;
  height: 32px;
  background-repeat: repeat-x;
  z-index: 10;
  zoom: 1;
  background-color: #373a3c;
}
header .nav .item {
  float: left;
  zoom: 1;
  text-align: center;
  color: #fff;
  font-size: 12px;
  padding: 3px 10px;
  margin: 4px 3px;
}
header .nav .item:hover, header .nav .item.active {
  background-color: rgb(80 80 80);
  border-radius: 28px;
  padding: 3px 10px;
  margin: 4px 3px;
  cursor: pointer;
}
header .nav .item i {
  font-size: x-large;
  color: #b2b2b2;
  padding-top: 4px;
}
header .nav .item i.on {
  color: #111111;
}
header .nav .item i:hover {
  color: #111111;
  cursor: pointer;
}
.btn {
  margin: 4px 3px;
}
</style>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import axios from 'axios';
import http from '@/common/http';

import { getFirestore, doc, setDoc } from 'firebase/firestore';

import DataUpload from '@/components/popupWindow/DataUpload.vue';

const PROXYS = {
  yg01 : 'https://yg02.herokuapp.com/',
  yg02 : 'https://yg02.herokuapp.com/',
  yg03 : 'https://yg03.herokuapp.com/',
}

const DAUM = 'https://finance.daum.net';
const KRX = 'http://data.krx.co.kr';
const PROXY = 'https://yg02.herokuapp.com/';
const PROXY_ORIGIN = 'https://yg02.herokuapp.com/';
const HTTP = {
  proxy: axios.create({
    baseURL: DAUM,
    headers: {
      Accept: 'application/json'
    }
  }),
  proxy1: axios.create({
    baseURL: PROXYS.yg01 + DAUM,
    headers: {
      Accept: 'application/json'
    }
  }),
  proxy2: axios.create({
    baseURL: PROXYS.yg02 + DAUM,
    headers: {
      Accept: 'application/json'
    }
  }),
  proxy3: axios.create({
    baseURL: PROXYS.yg03 + DAUM,
    headers: {
      Accept: 'application/json'
    }
  }),
  krx: axios.create({
    baseURL: PROXY + KRX,
    headers: {
      Accept: 'application/json',
      Origin: PROXY_ORIGIN,
    }
  }),
};

@Component({
  components: {
    DataUpload,
  },
  computed: mapGetters({
    selected: 'common/getSelected',
    db: 'common/getDb',
  }),
})
export default class Header extends Vue {
  selected!: any;
  db!: any;

  modalShow: boolean = false;

  buttonText: string = '';
  proxyText: string = 'proxy3';

  codes: any = [];
  codes2: any = [];

  daumTimes: any = [];
  isBusy: boolean = false;
  allLength: number = 0;
  per: number = 0;

  selectedCode: any = null;

  $refs!: {
    modal: DataUpload;
  }

  isTime: boolean = false;
  active: string = '';

  mounted() {
    this.$store.commit('common/setDb', getFirestore());
    this.isTime = this.$refs.modal.isTime;
  }

  async run() {
    // 업종별 데이터?
    this.codes = (await this.$store.dispatch('common/daumCodes', {
      fn: http.proxy(this.proxyText)
    })).data.data;
    this.buttonText = this.codes[0].sectorName;
  }

  onProxy(proxyText: string) {
    this.proxyText = proxyText;

    this.$store.commit('common/setSelected', {
      proxyText: this.proxyText,
      symbolCode: this.selectedCode,
      sectorName: this.buttonText,
      codes: this.codes2,
    });
  }

  onClick(symbolCode: any, sectorName: any) {
    this.selectedCode = symbolCode;
    this.buttonText = sectorName;

    this.getCodes();
  }

  async getCodes() {
    const symbolCode = this.selectedCode;
    // 루프 문 (모든 주식 code)

    this.codes2 = [];
    for(let page = 1; page < 5; page++) {
      const a = (await this.$store.dispatch('common/daumCode', {
        symbolCode: symbolCode,
        page: page,
        perPage: 100,
        fn: http.proxy(this.proxyText),
      })).data.includedStocks;

      this.codes2.push(...a);
      if(a.length != 100)
        break;
    }

    this.$store.commit('common/setSelected', {
      proxyText: this.proxyText,
      symbolCode: this.selectedCode,
      sectorName: this.buttonText,
      codes: this.codes2,
    });

    this.allLength = this.codes2.length;
  }

  async onClickSave() {
    for(let i = 0; i < this.allLength; i++) {
      await this.getDaum(this.codes2[i], i);
    }
  }

  // 데이터 가져오기 (다음)
  async getDaum(res: any, index: number) {

    this.per = Math.round(((index+1) / this.allLength) * 100);

    const code = res.symbolCode;
    let daums = [];

    //for(let page = 1; page <= 4; page++) {
      const PARAM: any = {
        symbolCode: code,
        //page: page,
        page: 1,
        perPage: 100,
        pagination: true,
      };

      const fn = this.proxyText == 'proxy' ? HTTP.proxy :
        this.proxyText == 'proxy1' ? HTTP.proxy1 :
        this.proxyText == 'proxy2' ? HTTP.proxy2 : 
        this.proxyText == 'proxy3' ? HTTP.proxy3 : HTTP.proxy;
      
      const a = await fn.get(`/api/quote/${code}/times`, {params: PARAM});
      if ( a.status == 200 ) {
        daums.push(...a.data.data);
        //if(a.data.data.length != 100)
          //break;
      } //else {
        //page--;
      //}
    //}

    await this.setFirebase(code, daums);
  }

  // set firebase
  async setFirebase(code: string, daums: any) {
    await setDoc(doc(this.db, "finance", code), { data: daums });
  }

  /* onClick(name: string) {
    this.buttonText = this.buttonTexts[name];

    this.$router.push({ name: name });
  } */
}
</script>
