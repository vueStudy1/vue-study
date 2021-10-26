<template>
  <div class="input-group">
    <b-table striped hover :items="DaumTimes" :fields="fields" :busy="isBusy">
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
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import _ from 'partial-js';

// vuefire 연동
interface DaumTime {
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
export default class Comparison extends Vue {
  @Prop()
  private todayData!: DaumTime[];

  @Prop()
  private yesterdayData!: DaumTime[];


  todayTime: string = '09:00';

  mounted() {
    setTimeout(() => {
      let today= new Date();
      today.setMinutes(today.getMinutes() - 1);
      this.todayTime= today.getHours() + ":" + today.getMinutes();
    }, 1000 * 60);
  }

  get timeYesterdayData() {
    let time = this.todayTime;
    
    return _.go(this.todayData,
      function(datas: any) {
        return _.filter(datas, function(u:any) { return u.tradeTime.substring(0,7) == time; });
      },
    );
  }

  get timeTodayData() {
    let time = this.todayTime;
    
    return _.go(this.todayData,
      function(datas: any) {
        return _.filter(datas, function(u:any) { return u.tradeTime.substring(0,7) == time; });
      },
    );
  }
}
</script>