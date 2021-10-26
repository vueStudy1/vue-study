<template>
  <div class="row m-1">
    <!-- <IncludedStocks @add="onAdd"/> -->

    <template v-for="option, index in options">
      <DaumTimes :option="option" :key="index" @comparision="onComparision"/>
    </template>

    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>
    <b-card class="col-1 p-2">
      <b-card-text><span class="name">카카오 뱅크</span></b-card-text>
      <b-card-text><span class="tradePrice">59,000</span> <span class="changePrice">+3,100</span> <span class="changeRate">5.55%</span></b-card-text>
      <b-card-text><span class="label">거래량</span> <span class="accTradeVolume">1,612,095</span></b-card-text>
      <b-card-text><span class="label">거래대금</span> <span class="accTradePrice">92,877</span></b-card-text>
      <b-card-text><span class="label">외국인</span> <span class="foreignRatio">5.28%</span></b-card-text>
    </b-card>


    <b-table striped hover :items="datas" :fields="fields" style="box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 1px 3px 1px;
      font-size: 10px;
      display: block;
      padding: 13px;
      border-radius: 4px;
      background: rgb(255, 255, 255);">
      <template #cell(changePrice)="data">
        <span style="color: #dc3545;" v-if="data.item.changePrice > 0">{{ data.item.changePrice }}</span>
        <span style="color: #007bff" v-else>{{ data.item.changePrice }}</span>
      </template>
      <template #cell(changeRate)="data">
        <span style="color: #dc3545;" v-if="data.item.changeRate > 0">{{ data.item.changeRate }}</span>
        <span style="color: #007bff" v-else>{{ data.item.changeRate }}</span>
      </template>
    </b-table>

    <!-- <table class="table" caption-top responsive sticky-header>
      <b-thead>
        <b-tr>
          <template v-for="field, index in fields">
          <b-th :key="index">{{field.label}}</b-th>
          </template>
        </b-tr>
      </b-thead>
      <b-tbody>
        <template v-for="option, index in options">
          <DaumTimes :option="option" :key="index" @comparision="onComparision"/>
        </template>
      </b-tbody>
    </table> -->
  </div>
</template>

<style scoped>
.row {
  --bs-gutter-x: 0;
}
.card {
  background-color: rgb(49, 49, 49);
  color: rgba(255, 255, 255, 0.705);
}
.card:hover {
  background-color: rgb(58, 58, 58);
  cursor: pointer;
}
.card-body {
  padding: 0;
}
p {
  margin-bottom: 0;
  line-height: 11px;
}
.label {
  font-size: 10px;
  color: rgb(136, 136, 136);
}
.accTradePrice { /* 거래대금 */
  font-size: 11px;
}
.accTradeVolume { /* 거래량 */
  font-size: 11px;
}
.changePrice { /* 전일비 */
  font-size: 11px;
  color: rgb(226, 101, 101);
}
.changeRate { /* 등락률 */
  font-size: 11px;
  color: rgb(226, 101, 101);
}
.code { /* 종목코드 */
  font-size: 10px;
}
.foreignRatio { /* 외국인 */
  font-size: 11px;
}
.marketCap { /* 시가총액 */
  font-size: 10px;
}
.name {
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
}
.symbolCode { /* 종목코드 */
  font-size: 13px;
} 
.tradePrice { /* 현재가 */
  font-size: 13px;
  line-height: 13px;
  font-weight: bold;
  color: rgb(226, 101, 101);
}
</style>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import DaumTimes from '@/components/Button/DaumTimes.vue'
import { forEach } from 'lodash';
// import { forEach } from 'lodash';

const FIELDS = [
  { key: 'name', label: '종목' },
  { key: 'accTradePrice', label: '거래대금' },
  { key: 'todayVolume', label: '어제 거래량' },
  { key: 'yesterdayVolume', label: '오늘 거래량' },
  { key: 'accTradeVolume', label: '거래량' },
  /* { key: 'change', label: '?' }, */
  { key: 'changePrice', label: '전일비' },
  { key: 'changeRate', label: '등락률' },
  /* { key: 'date', label: '날짜' }, */
  /* { key: 'exchangeCountry', label: '나라?' }, */
  /* { key: 'highPrice', label: '고가' }, */
  /* { key: 'listedSharesCount', label: '' }, */
  /* { key: 'lowPrice', label: '저가' }, */
  /* { key: 'openingPrice', label: '시가' }, */
  /* { key: 'periodTradePrice', label: '거래대금' }, */
  /* { key: 'periodTradeVolume', label: '거래량' }, */
  /* { key: 'prevClosingPrice', label: '고가' }, */
  /* { key: 'symbolCode', label: '종목 코드' }, */
  { key: 'yesterdayTradePrice', label: '어제 현재가' },
  { key: 'tradePrice', label: '현재가' },
  { key: 'tradeTime', label: '시간' },
];

@Component({
 components: {
   DaumTimes,
 },
 computed: mapGetters({
   selected: 'common/getSelected',
 }),
})
export default class Home extends Vue {
  selected!: any;

  fields: any = FIELDS;

  daumTime: any = null;
  daumTimes: any = [];

  options: any = [];

  datas: any = [];

  @Watch('selected', { deep: true })
  onSelected(newVal: any) {
    this.options = [];
    forEach(newVal.codes, (code) => {
      this.options.push({
        value: code.symbolCode,
        text: code.name,
      });
    });
  }

  onComparision(el: any) {
    let apples:any = [];
    apples = this.datas.filter((element: any) => {
      if(element.name != el.name)  {
        return true;
      }
    });

    if(apples == undefined) {
      apples = [];
    }

    apples.push(el);
    apples.sort(function (a: any, b: any) {
      return b.accTradeVolume - a.accTradeVolume;
    });

    this.datas = apples;
  }


  // async mounted() {
  //   const res = (await this.$store.dispatch('common/krxKospi')).data.OutBlock_1;

  //   forEach(res, (re) => {
  //     this.options.push({
  //       value: re.symbolCode,
  //       text: re.name,
  //     });
  //   });
  // }
}
</script>