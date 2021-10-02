<template>
  <div>
    <b-card no-body bg-variant="dark" text-variant="white" style="dispcklay: blo; float: left; width: 410px; margin: 38px 55px 0 0;">
      <b-card-body>
        <h5 style="display: block; font-size: 16px;">코스피 지수
          <em style="display: inline-block; margin-left: 2px; font-size: 13px; font-weight: normal;">KOSPI</em>
          <em style="float: right;"><b-button @click="onClick">
            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            새로고침
          </b-button></em>
        </h5>
        <span style="display: block; margin-bottom: 6px; overflow: hidden;">
          <strong style="display: inline-block; font-size: 36px; font-weight: normal; letter-spacing: 0;">{{daumKosdaqKospi.tradePrice}}</strong>
          <p style="display: inline-block; margin-left: 14px; font-size: 18px; font-weight: normal;"><i>▼</i>{{daumKosdaqKospi.changePrice}}</p>
          <p style="display: inline-block; margin-left: 14px; font-size: 18px; font-weight: normal;">{{daumKosdaqKospi.changeRate}}%</p>
        </span>
        <b-card-img src="https://t1.daumcdn.net/finance/chart/kr/daumindex/i/D0011001.png?t=202110021156" alt="일별 차트" class="rounded-0"></b-card-img>
        <span style="display: block; margin-top: 14px; overflow: hidden;">
          <span style="display: inline-block; font-size: 12px;">개인<p class="up" style="display: inline-block; margin-left: 4px;">{{daumKosdaqKospi.investorSummary.individualStraightPurchasePrice}}억</p></span>
          <span style="display: inline-block; font-size: 12px; margin-left: 12px;">기관<p class="down" style="display: inline-block; margin-left: 4px;">{{daumKosdaqKospi.investorSummary.institutionStraightPurchasePrice}}억</p></span>
          <span style="display: inline-block; font-size: 12px; margin-left: 12px;">외국인<p class="down" style="display: inline-block; margin-left: 4px;">{{daumKosdaqKospi.investorSummary.foreignStraightPurchasePrice}}억</p></span>
          <span style="display: inline-block; font-size: 12px; margin-left: 12px;">프로그램<p class="down" style="display: inline-block; margin-left: 4px;">{{daumKosdaqKospi.investorSummary.programStraightPurchasePrice}}억</p></span>
        </span>
      </b-card-body>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  components: {
  },
  computed: mapGetters({
  }),
})
export default class Kospi extends Vue {
  daumKosdaqKospi: any = {
    "symbolCode": "D0011001",
    "code": "D0011001",
    "openingPrice": 3056.21,
    "highPrice": 3062.6,
    "lowPrice": 3015.01,
    "tradePrice": '0', //3019.18,
    "prevClosingPrice": 3068.82,
    "change": "FALL",
    "changePrice": 0,
    "changeRate": '0', //0.0161755984,
    "name": "코스피 지수",
    "date": "2021-10-01",
    "tradeDate": "20211001",
    "tradeTime": "153000",
    "exchangeDate": "2021-10-01 15:30:00",
    "exchangeCountry": "KOREA",
    "securityGroup": null,
    "market": "KOSPI",
    "isIndex": true,
    "accTradePrice": 12944006,
    "accTradeVolume": 855481,
    "prevAccTradeVolume": null,
    "prevAccTradeVolumeChangeRate": null,
    "marketCap": 0,
    "marketCapRank": null,
    "high52wPrice": 3316.08,
    "high52wDate": "2021-06-25",
    "low52wPrice": 2266.93,
    "low52wDate": "2020-10-30",
    "basePrice": 3068.82,
    "upperLimitPrice": null,
    "lowerLimitPrice": null,
    "foreignRatio": null,
    "prevForeignRatio": null,
    "foreignOwnShares": -611581010,
    "parValue": null,
    "eps": null,
    "dps": null,
    "per": null,
    "bps": null,
    "pbr": null,
    "sectorCode": "001",
    "sectorName": "코스피 지수",
    "sectorChangeRate": 0.0161755984,
    "wicsSectorCode": null,
    "wicsSectorName": null,
    "wicsSectorChangeRate": null,
    "investorSummary": {
      "individualStraightPurchasePrice": '0', //760865762811,
      "institutionStraightPurchasePrice": '0', //-487272498317,
      "foreignStraightPurchasePrice": '0', //-303461626983,
      "programStraightPurchasePrice": '0' //-145617856267
    },
    "changeStatistics": null,
    "chartImageUrl": {
      "day": "https://t1.daumcdn.net/finance/chart/kr/daumindex/i/D0011001.png",
      "mini": "https://t1.daumcdn.net/finance/chart/kr/stock/d/mini/D0011001_index.png"
    },
    "currency": "KRW",
    "exchange": null,
    "earlyYearPrice": null,
    "lastWeekPrice": null,
    "listedShareCount": null,
    "sectorPer": null,
    "listingDate": null,
    "settleMonth": null,
    "high50dPrice": 3215.13,
    "low50dPrice": 3015.01,
    "highInYearPrice": 3316.08,
    "lowInYearPrice": 2869.11,
    "capitalStock": null,
    "bidPrice": 0,
    "askPrice": 0,
    "companySummary": null,
    "stockState": null,
    "chartSlideImage": null,
    "debtRatio": null,
    "sales": null,
    "operatingProfit": null,
    "preTaxProfit": null,
    "netIncome": null,
    "signedChangeRate5daysAgo": -0.0339365937,
    "signedChangeRate20daysAgo": -0.0562909664,
    "signedChangeRate60daysAgo": -0.0832106061,
    "signedChangeRate120daysAgo": -0.03947494,
    "signedChangeRate250daysAgo": 0.3284551415,
    "prevClosingPrice5daysAgo": 3125.24,
    "prevClosingPrice20daysAgo": 3199.27,
    "prevClosingPrice60daysAgo": 3293.21,
    "prevClosingPrice120daysAgo": 3143.26,
    "prevClosingPrice250daysAgo": 2272.7,
    "timestamp": 1633079010054,
    "isClosing": true
  };
  loading:boolean = false;

  async onClick() {
    this.loading = true;

    this.daumKosdaqKospi = (await this.$store.dispatch('common/daumKosdaqKospi')).data.data[0];

    const { tradePrice, change, changeRate, investorSummary } = this.daumKosdaqKospi;
    const { individualStraightPurchasePrice, institutionStraightPurchasePrice, foreignStraightPurchasePrice, programStraightPurchasePrice } = investorSummary;

    this.daumKosdaqKospi.tradePrice = this.amountCommas(String(tradePrice));
    this.daumKosdaqKospi.changeRate = String(change === 'FALL' ? '-' : '') + String((changeRate * 100).toFixed(2));
    this.daumKosdaqKospi.investorSummary.individualStraightPurchasePrice = this.amountCommas(String(individualStraightPurchasePrice).slice(0, -8));
    this.daumKosdaqKospi.investorSummary.institutionStraightPurchasePrice = this.amountCommas(String(institutionStraightPurchasePrice).slice(0, -8));
    this.daumKosdaqKospi.investorSummary.foreignStraightPurchasePrice = this.amountCommas(String(foreignStraightPurchasePrice).slice(0, -8));
    this.daumKosdaqKospi.investorSummary.programStraightPurchasePrice = this.amountCommas(String(programStraightPurchasePrice).slice(0, -8));

    this.$emit('input', this.daumKosdaqKospi);
    this.loading = false;
  }

  amountCommas(val: string){
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
  }
}
</script>