<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { forEach } from 'lodash';
import axios from 'axios';

Vue.config.productionTip = false

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

@Component({
  components: {
  },
  computed: mapGetters({
  }),
})
export default class IncludedStocks extends Vue {
  value: any = '';

  options: any = [];

  async mounted() {
    const res = (await HTTP.daum.get(`/api/sectors/D0011006/includedStocks`, {params: {
      symbolCode: 'D0011006',
      page: 1,
      perPage: 30,
      fieldName: 'changeRate',
      order: 'desc',
      pagination: true,
    }})).data.includedStocks;

    this.options = [];
    forEach(res, (re) => {
      this.options.push({
        value: re.symbolCode,
        text: re.name,
      });
    });

    this.value = this.options[0].value;

    this.onClick();
  }

  onClick() {
    //this.$emit('add', this.value);
    this.$emit('add', this.options);
  }
}
</script>