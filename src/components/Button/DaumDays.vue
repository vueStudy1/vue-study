<template>
  <div class="input-group">
    <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" v-model="code">
      <option selected>Choose...</option>
      <option value="A303530">A303530</option>
      <option value="A005930">삼성전자</option>
      <option value="A035420">네이버</option>
      <option value="A035720">카카오</option>
    </select>
    <button class="btn btn-outline-secondary" type="button" @click="onClick">DaumDays</button>
    <button class="btn btn-outline-secondary" type="button" @click="onClear">clear</button>
    <b-table striped hover :items="daumDays" :fields="fields" :busy="isBusy">
      <template #table-busy>
        <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import axios from 'axios';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

interface DaumDay {
  accTradePrice: number; // 거래대금
  accTradeVolume: number; // 거래량
  change: string; // ?
  changePrice: number; // 전일비 (마이너스 플러스 안나옴)
  changeRate: number; // 등락률
  date: string; // 날짜
  exchangeCountry: string; // 나라?
  highPrice: number; // 고가
  listedSharesCount: string;
  lowPrice: number; // 저가
  openingPrice: number; // 시가
  periodTradePrice: number; // 거래대금
  periodTradeVolume: number; // 거래량
  prevClosingPrice: number; // 고가
  symbolCode: string; // 종목 코드
  tradePrice: number; // 현재 가
  tradeTime: string; // 시간
}

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

const DAUM = 'https://finance.daum.net';
const KRX = 'http://data.krx.co.kr';
const PROXY = 'https://yg02.herokuapp.com/';
const PROXY_ORIGIN = 'https://yg02.herokuapp.com/';
const HTTP = {
  daum: axios.create({
    baseURL: PROXY + DAUM,
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
const FIELDS = [
  { key: 'accTradePrice', label: '거래대금' },
  { key: 'accTradeVolume', label: '거래량' },
  { key: 'change', label: '?' },
  { key: 'changePrice', label: '전일비' },
  { key: 'changeRate', label: '등락률' },
  { key: 'date', label: '날짜' },
  { key: 'exchangeCountry', label: '나라?' },
  { key: 'highPrice', label: '고가' },
  { key: 'listedSharesCount', label: '' },
  { key: 'lowPrice', label: '저가' },
  { key: 'openingPrice', label: '시가' },
  { key: 'periodTradePrice', label: '거래대금' },
  { key: 'periodTradeVolume', label: '거래량' },
  { key: 'prevClosingPrice', label: '고가' },
  { key: 'symbolCode', label: '종목 코드' },
  { key: 'tradePrice', label: '현재가' },
  { key: 'tradeTime', label: '시간' },
];

@Component({
  components: {
  },
  computed: mapGetters({
  }),
})
export default class DaumDays extends Vue {
  code:string = 'A303530';
  daumDays: DaumDay[] = [];
  fields: any = FIELDS;
  isBusy: boolean = false;

  async onClick() {
    const PARAM: any = {
      symbolCode: this.code,
      page: 1,
      perPage: 100,
      pagination: true,
    };
    this.isBusy = true;
    this.daumDays = (await HTTP.daum.get(`/api/quote/${this.code}/days`, {params: PARAM})).data.data;
    this.isBusy = false;
  }

  onClear() {
    this.daumDays = [];
  }
}
</script>