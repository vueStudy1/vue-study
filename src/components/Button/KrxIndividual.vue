<template>
  <div class="input-group">
    <b-form-datepicker v-model="data.startDate" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
    <b-form-datepicker v-model="data.endDate" class="form-control" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
    <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" v-model="data.code">
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
    <button v-else class="btn btn-outline-secondary" type="button" @click="onClick">KrxIndividual</button>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import _ from 'partial-js';

@Component({
  components: {
  },
  computed: mapGetters({
  }),
})
export default class KrxIndividual extends Vue {
  loading = false;
  data = {
		startDate: '2021-09-15',
    endDate: '2021-09-23',
    code: 'A005930',
	};

  split = (a: any) => String(a).split("");
  concat = (a: any, b: any) => a.concat(b);
  sum = (a: any, b: any) => Number(a) + Number(b);
  kr7 = (a: any) => `KR7${this.data.code.slice(1)}00${String(10-a%10)}`;
  replace = (a: any) => a.replaceAll('-','');

  standardCode = _.pipe(
    this.split,
    _.map(function(num: number, i: number) { if( i % 2 == 0) return num; else return num * 2; }),
    _.map(this.split),
    _.reduce(this.concat),
    _.reduce(this.sum),
    this.kr7,
  );

  async onClick() {
    this.loading = true;
    const krxIndividual = await this.$store.dispatch('common/krxIndividual', this.standardCodeData);
    this.$emit('input', krxIndividual.data.output);
    this.loading = false;
  }

  get standardCodeData() {
    return {
      startDate: this.replace(this.data.startDate),
      endDate: this.replace(this.data.endDate),
      code: this.standardCode(this.data.code.slice(1)),
    }
  }
}
</script>
