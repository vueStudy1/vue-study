<template>
<div></div>
  <!-- <b-tr>
    <b-td>{{option.text}}</b-td>
    <b-td>{{tr.accTradePrice}}</b-td>

    <b-td>{{tr.yesterdayVolume}}</b-td>
    <b-td>{{tr.todayVolume}}</b-td>

    <b-td>{{tr.accTradeVolume}}%</b-td>

    <b-td>{{tr.changePrice}}</b-td>
    <b-td>{{tr.changeRate}}</b-td>

    <b-td>{{tr.change}}</b-td>
    <b-td>{{tr.changePrice}}</b-td>
    <b-td>{{tr.changeRate}}</b-td>
    <b-td>{{tr.date}}</b-td>
    <b-td>{{tr.exchangeCountry}}</b-td>
    <b-td>{{tr.highPrice}}</b-td>
    <b-td>{{tr.listedSharesCount}}</b-td>
    <b-td>{{tr.lowPrice}}</b-td>
    <b-td>{{tr.openingPrice}}</b-td>
    <b-td>{{tr.periodTradePrice}}</b-td>
    <b-td>{{tr.periodTradeVolume}}</b-td>
    <b-td>{{tr.prevClosingPrice}}</b-td>
    <b-td>{{tr.symbolCode}}</b-td>
    <b-td>{{tr.yesterdayTradePrice}}</b-td>
    <b-td>{{tr.tradePrice}}</b-td>
    <b-td>{{tr.tradeTime}}</b-td>
  </b-tr> -->
  <!-- <b-table striped hover :items="comparision" :fields="fields" :busy="isBusy" /> -->
  <!-- <div class="input-group">
    <b-form-input id="range-1" type="range" min="0" max="5"></b-form-input>
    <b-form-input type="date"></b-form-input>
    <b-form-input v-model="todayTime" type="time" />

    <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" v-model="code">
      <option selected>Choose...</option>
      <option value="A303530">A303530</option>
      <option value="A005930">삼성전자</option>
      <option value="A035420">네이버</option>
      <option value="A035720">카카오</option>
    </select>
    <button class="btn btn-outline-secondary" type="button" @click="onClick">DaumTimes</button>
    <button class="btn btn-outline-secondary" type="button" @click="onClear">clear</button>
    <button class="btn btn-outline-secondary" type="button" @click="onAdd">add</button>
    <button class="btn btn-outline-secondary" type="button" @click="onRead">read</button>
    <b-table striped hover :items="DaumTimes" :fields="fields" :busy="isBusy">
      <template #table-busy>
        <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
  </div> -->
  
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { doc, getDoc } from 'firebase/firestore';
import { forEach } from 'lodash';

//import axios from 'axios';

interface DaumTime {
  accTradePrice: number; // 누적 거래대금
  accTradeVolume: number; // 누적 거래량
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

// const DAUM = 'https://finance.daum.net';
// const KRX = 'http://data.krx.co.kr';
// const PROXY = 'https://yg01.herokuapp.com/';
// const PROXY_ORIGIN = 'https://yg01.herokuapp.com/';
// const HTTP = {
//   daum: axios.create({
//     baseURL: PROXY + DAUM,
//     headers: {
//       Accept: 'application/json'
//     }
//   }),
//   krx: axios.create({
//     baseURL: PROXY + KRX,
//     headers: {
//       Accept: 'application/json',
//       Origin: PROXY_ORIGIN,
//     }
//   }),
// };

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
    db: 'common/getDb',
  }),
})
export default class DaumTimes extends Vue {
  @Prop()
  option!: any;

  db!: any;

  code: string = this.option.value;

  DaumTimes: DaumTime[] = [];
  firebaseDaumTimes: DaumTime[] = [];

  fields: any = FIELDS;
  isBusy: boolean = false;
  todayTime: string = '09:00'; // 1분 지연

  mounted() {
    // 어제 데이터는 한번만 가져옴
    //this.onRead();

    // 오늘 데이터는 1분에 한번씩 가져옴
    //this.getTodayData();

    const random = Math.floor(Math.random() * 10);
    setTimeout(async() => {
      await this.onRead();
      this.getTodayData();
      setInterval(this.getTodayData, 1000 * 60);
    }, 1000 * random)
  }

  getTodayData() {
    let today= new Date();
    //today.setHours(today.getHours() - 10);
    today.setMinutes(today.getMinutes(), 2);
    this.todayTime= String(today.getHours()).padStart(2,'0') + ":" + String(today.getMinutes()).padStart(2,'0');
    
    this.onClick();
  }

  // 시간별로 데이터 전부 가져오기
  async onClick() {
    if(this.firebaseDaumTimes.length != 0) {
      this.DaumTimes = [];
    //for(let page = 1; page <= 4; page++) {
      const PARAM: any = {
        symbolCode: this.code,
        page: 1,
        perPage: 10,
        pagination: true,
      };
      this.isBusy = true;

      this.DaumTimes.push(...(await this.$store.dispatch('common/daumTimes', PARAM)).data.data);
      this.isBusy = false;
    //}

      this.todayTime= this.DaumTimes[0].tradeTime.substring(0,5);

      this.comparision();
    } else if (this.firebaseDaumTimes.length == 0) {
      // await this.onAdd();
      await this.onRead();
    }
  }

  async daumYesterday() {
    return
  }

  onClear() {
    this.DaumTimes = [];
  }

  /* async onAdd() {
    try {
      if( this.DaumTimes.length != 0 ) {
        this.isBusy = true;
        await setDoc(doc(db, "finance", this.code), { data: this.DaumTimes });
        this.isBusy = false;
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } */

  async onRead() {
    try {
      const code = this.code;
      this.isBusy = true;

      const querySnapshot = await getDoc(doc(this.db, "finance", code));

      if (querySnapshot.exists()) {
        this.firebaseDaumTimes = querySnapshot.data().data;
      } else {
        console.log("No such document!");
      }
      this.isBusy = false;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  timeYesterdayData() {
    let timeYesterdayData;
    forEach(this.firebaseDaumTimes, (yesterdayData) => {
      if(yesterdayData.tradeTime.substring(0,5) == this.todayTime) {
        timeYesterdayData = yesterdayData;
      }
    });
    return timeYesterdayData;
  }

  timeTodayData() {
    let timeTodayData;
    forEach(this.DaumTimes, (todayData) => {
      if(todayData.tradeTime.substring(0,5) == this.todayTime) {
        timeTodayData = todayData;
      }
    });
    return timeTodayData;
  }

  tr: any = {};

  comparision() {
    const timeTodayData: any = this.timeTodayData();
    const timeYesterdayData: any = this.timeYesterdayData();

    if(timeTodayData !== undefined && timeYesterdayData !== undefined) {
      this.tr = {
        name: this.option.text,
        accTradePrice: this.per(timeTodayData.accTradePrice, timeYesterdayData.accTradePrice),

        todayVolume: timeTodayData.accTradeVolume,
        yesterdayVolume: timeYesterdayData.accTradeVolume,

        accTradeVolume: this.per(timeTodayData.accTradeVolume, timeYesterdayData.accTradeVolume),
        //change: timeTodayData.change,
        changePrice: timeTodayData.changePrice, // 전일비
        changeRate: (timeTodayData.changeRate * 100).toFixed(2), // 등락률
        // date: timeTodayData.date,
        // exchangeCountry: timeTodayData.exchangeCountry,
        // highPrice: this.per(timeTodayData.highPrice, timeYesterdayData.highPrice),
        // listedSharesCount: timeTodayData.listedSharesCount,
        // lowPrice: this.per(timeTodayData.lowPrice, timeYesterdayData.lowPrice),
        // openingPrice: this.per(timeTodayData.openingPrice, timeYesterdayData.openingPrice),
        // periodTradePrice: this.per(timeTodayData.periodTradePrice, timeYesterdayData.periodTradePrice),
        // periodTradeVolume: this.per(timeTodayData.periodTradeVolume, timeYesterdayData.periodTradeVolume),
        // prevClosingPrice: this.per(timeTodayData.prevClosingPrice, timeYesterdayData.prevClosingPrice),
        // symbolCode: timeTodayData.symbolCode,
        yesterdayTradePrice: timeYesterdayData.tradePrice,
        tradePrice: timeTodayData.tradePrice,
        tradeTime: timeTodayData.tradeTime,
      };

      this.$emit('comparision', this.tr);
    }
    return this.tr;
  }

  per(today: number, yesterday: number) {
    return ((today / yesterday) * 100).toFixed(2);
  }
}
</script>