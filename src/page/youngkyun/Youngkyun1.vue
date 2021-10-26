<template>
  <div>
    DaumRankButton (store 저장하기)
    <DaumRank />

    분별 시세 가져오기
    <div class="input-group">
      <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" v-model="param.code">
        <option selected>Choose...</option>
        <option value="A303530">A303530</option>
        <option value="A005930">삼성전자</option>
        <option value="A035420">네이버</option>
        <option value="A035720">카카오</option>
      </select>
      <button v-if="loading" class="btn btn-outline-secondary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
      <button v-else class="btn btn-outline-secondary" type="button" @click="onClick">DaumTimes</button>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import DaumRank from '@/components/Button/DaumRank.vue'

interface DaumTime {
  symbolCode: string,
  date: string,
  tradePrice: number,
  tradeTime: string,
  change: string,
  changePrice: number,
  changeRate: number,
  prevClosingPrice: number,
  openingPrice: number,
  highPrice: number,
  lowPrice: number,
  accTradePrice: number,
  accTradeVolume: number,
  periodTradePrice: number,
  periodTradeVolume: number,
  askTradePrice: string,
  bidTradePrice: string,
}

@Component({
 components: {
   DaumRank,
 },
 computed: mapGetters({
   daumRank: 'common/getDaumRank',
 }),
})
export default class Youngkyun1 extends Vue {
  readonly daumRank!: any;

  test: string = '';

  param: any = {
    code: 'A303530',
    page: 1,
  };
  loading: boolean = false;

  daumTimes: DaumTime[] = [];

  async onClick() {
    this.loading = true;

    for(this.param.page = 1; this.param.page <= 4; this.param.page++) {
      const daumTimes = (await this.$store.dispatch('common/daumTimes', this.param)).data;
      this.daumTimes = [...this.daumTimes, ...daumTimes];
      this.loading = false;
    }
  }
}
</script>