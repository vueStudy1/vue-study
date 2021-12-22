<template>
  <b-modal v-model="temp" title="data upload" :no-close-on-backdrop="true" centered>
    <div class="row top">
      <div class="col-4 label"> 종목명
        <span class="title">삼성전자</span>
      </div>
      <div class="col-4 label"> 종목
        <span class="title">{{queue.fns.length}} / {{krxAll.length}}</span>
      </div>
      <div class="col-4 label"> 남은시간
        <span class="title">00:00:00</span>
      </div>
    </div>

    <div class="row top">
      <b-progress class="col-12 all-progress" :value="allProgress"></b-progress>
    </div>
    
    <div class="table-header">
      <div class="row">
        <div class="col-2 label">종목명</div>
        <div class="col-10 label">진행상태</div>
      </div>
    </div>
    <div class="modal-body-bottom">
      <div class="wrap">
        <div class="scroll">

          <template v-for="krx, index in queue.fns">
            <div class="row" :key="index">
              <div class="col-2 label">{{krx.ISU_ABBRV}} {{krx.progres}}</div>
              <div class="col-10"><b-progress :value="krx.progress"></b-progress></div>
            </div>
          </template>

        </div>
      </div>
    </div>

    <template>
      <b-button size="sm" variant="" @click="ok()">
        upload start
      </b-button>
      <b-button size="sm" variant="" @click="cancel()">
        cancel
      </b-button>
    </template>
  </b-modal>
</template>
<style scoped>
p {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 14px;
  font-size: 14px;
}
.modal-content {
  background-color: var(--bs-gray-800);
  color:#b2b2b2;
}
.modal-header {
  background-color: #262626;
  border-bottom: 1px solid #5c5c5c;
  padding: 3px 6px;
}
.modal-title {
  margin-bottom: 0;
  line-height: 14px;
  font-size: 14px;
}
.modal-body {
  background-color: #323232;
  position: relative;
  flex: 1 1 auto;
  padding: 0;
}
.modal-footer {
  background-color: #262626;
  border-top: 1px solid #5c5c5c;
  padding: 6px 6px;
}
.modal-footer .btn-secondary {
  margin-right: 6px;
}
.btn {
  padding: 1px 5px;
  font-size: 12px;
  padding: 2px 8px;
  margin: 0;
  border: 0;
  box-shadow: 0 0 0 0 rgb(130 138 145 / 50%);
}
.progress-bar {
  background-color: rgb(133, 133, 133);
}
.row {
  --bs-gutter-x: 0;
}
.label {
  color: #979797;
  font-size: 12px;
}
.title {
  font-size: 13px;
  color: #c3c3c3;
}
.progress {
  height: 7px;
  margin-top: 6px;
  color: #898989;
}
.progress-bar {
  background-color: rgb(226, 101, 101);
}

.modal-body-bottom {
  overflow: auto;
  height: 300px;
}
.modal-body-bottom::-webkit-scrollbar {
  display: none;
}
.wrap {
  overflow-y: initial;
}
.scroll {
  white-space: initial;
}
.scroll .row {
  padding: 4px;
}
.scroll .row:hover {
  background-color: rgb(61, 61, 61);
}
.table-header {
  padding: 5px;
  border-bottom: 1px solid rgb(83, 83, 83);
  border-top: 1px solid rgb(83, 83, 83);
  margin-top: 10px;
}
.all-progress {
  height: 14px;
}
.top {
  padding: 4px 10px 0 10px;
}
</style>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { YgFireStore } from '@/common';

class Queue {
  fns: any = [];
  runState: boolean = false;

  constructor() {
    this.fns = [];
    this.runState = false;
  }

  enqueue(fn: any) {
    this.fns.push(fn);
    //this.run(); // 큐가 들어 오면 바로 실행한다.
  }

  queue() {
    return this.fns[0];
  }

  dequeue() { // 실행이 끝나면 dequeue()를 실행하도록 한다.
    //this.runState = false;
    if(this.fns.length > 0) {
      return this.fns.shift();
    } else {
      return null;
    }
    // if(this.fns.length > 0) // 큐에 남아 있는 것이 있는 것을 확인 후 실행한다.
    //   this.run();
  }

  run() {
    if(!this.runState) { // 실행중인 큐가 없을때, 실행을 한다.
      this.runState = true;
      this.fns[0]();
    }
  }

  clear() {
    this.fns = [];
  }
}

@Component({
  components: {
  },
  computed: mapGetters({
    selected: 'common/getSelected',
    db: 'common/getDb',
    codeDayData: 'common/getCodeDayDatas',
  }),
})
export default class DataUpload extends Vue {
  @Prop()
  value!: boolean;
  codeDayData!: any;

  temp: boolean = false;

  ygFireStore: any = null;

  krxAll: any = []; // 전체 데이터
  queue: any = new Queue(); // 큐 데이터

  codeDayDatas: any = {}; //코드별 일자별 데이터

  @Watch('value')
  onValue(value: boolean) {
    this.temp = value;
  }

  async created() {
    this.ygFireStore = new YgFireStore();
    this.ygFireStore.setDb();
    
    console.log(await this.ygFireStore.isDay());
  }

  // 3:30반 이 되지 않았다면, 
  get isTime() {
    const now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');	// 시간
    var minutes = String(now.getMinutes()).padStart(2, '0');	// 분
    var seconds = String(now.getSeconds()).padStart(2, '0');	// 초

    console.log(`15:30:59 < ${hours}:${minutes}:${seconds} = ${'15:30:59' < `${hours}:${minutes}:${seconds}`}`);

    return '15:30:59' < `${hours}:${minutes}:${seconds}`;
  }

  // or 오늘 한번이라도 살행이 되었다면, => firebase 에서 오늘 날짜의 run 데이터의 유무로 알수 있음
  @Watch('temp')
  async onTemp(temp: boolean) {
    if(!this.temp) {
      this.$emit('input', temp);
    } else {
      //if(await this.ygFireStore.isDay()) { // 저장 했다면...
      //  this.$bvToast.toast(`오늘 데이터는 이미 저장되었습니다.`, { title: '알림' });
      //} else { // 저장 안했다면...
        this.$bvToast.toast(`저장된 데이터가 없어 업로드 시작합니다.`, { title: '알림' });
        await this.getAllCd(); // 전종목
        this.addQueue();
      //}
      console.log(await this.ygFireStore.isDay());
    }
  }

  // 팝업창을 띄우고, 확인 누르면 창 닫기

  // 전체 프로그래스바
  // 1. value ( (전종목 - 큐) / 전종목)  * 100
  get allProgress() {
    return (this.krxAll.length - this.queue.fns.length)/this.krxAll.length * 100;
  }

  // 전종목 (krx)
  async getAllCd() {
    this.krxAll = (await this.$store.dispatch('common/krxAll', {
      date: '20210915',
      mktId: 'STK',
    })).data.OutBlock_1;
  }
  
  // 각각 프로그래스바
  // 1. 큐에 남아 있는 것 and
  // 2. service 중인 데이터를 출력
  // 3. value ( (진행한 page + firebase 업로드) / (total page + 1) ) * 100

  // 남은 시간
  // ( 진행된 시간 / (전종목 - 큐) ) * 큐 => 진행된 시간은 (1000)초단위로 계산

  // 시작 이벤트
  // 1. 전 종목 가져오기 (한국거래소) -> 각각 프로그래스바
  // 2. 1개의 큐에 종목을 넣기 (종목코드)
  addQueue () {
    this.queue.clear();
    this.krxAll.forEach((element: any) => {
      element.progress = 0;
      this.queue.enqueue(element);  
    });

    this.serviceRun();
  }

  // 3. 10개의 service run => service는 10개에서 더 늘어 날수도 있다.

  // 10개의 service run
  async serviceRun() {
    // 1. 큐에서 종목 하나 꺼내어 오면서 큐 제거 (큐 제거는 나중에)
    const que = this.queue.queue();
    if(que == null) {
      this.$bvToast.toast(`데이터를 업로드가 완료 되었습니다.`, { title: '알림' });

      // 전종목을 vuex에 저장하기
      // 오늘 날짜 저장하기
      this.ygFireStore.setDay();
      console.log('오늘 날짜 저장하기');
      this.$store.commit('common/setCodeDayDatas', this.codeDayDatas);
      console.log('전종목을 vuex에 저장하기');

      // vuex에 저장된걸 firebase에 저장
      // code 대신 날짜로..
      await this.ygFireStore.setFinance(this.ygFireStore.day, this.codeDayDatas);
      console.log('vuex에 저장된걸 firebase에 저장');

      return;
    }

    // 2. 종목으로 시간대별 데이터 가져오기 (다음), 
    const PARAM: any = {
      symbolCode: `A${que.ISU_SRT_CD}`,
      page: 1,
      perPage: 100,
      pagination: true,
    };

    const DaumTimes = [];
    const res = (await this.$store.dispatch('common/daumTimes', PARAM)).data;
    DaumTimes.push(...res.data);

    for(let i = 1; i < res.totalPages; i++) {
      PARAM.page = i+1;
      this.queue.fns.splice(0, 1, {...que, progress: i / res.totalPages * 100});
      DaumTimes.push(...(await this.$store.dispatch('common/daumTimes', PARAM)).data.data);
    }
    this.queue.fns.splice(0, 1, {...que, progress: 100});
    this.queue.dequeue();

    this.codeDayDatas[`A${que.ISU_SRT_CD}`] = DaumTimes;

    this.serviceRun();
    // 3. total page 만큼 조회하여 merge (한번이라도 실패하면 service 중지)
  }


  
  // 3. total page 만큼 조회하여 merge (한번이라도 실패하면 service 중지)
  // 4. firebase 업로드
  // 5. 정상 완료시 (service run)
  // 6. 비정상 완료시 (service 중지)
  // 7. 서비스가 중지되면 종목을 큐에다가 넣고 (service run)

  // 큐
  // 1. 종목코드 저장
  // 2. push - 종목코드 하나씩 넣음..
  // 3. shift - (큐에 종목코드가 남아 있는 지 확인후) 종목코드 하나씩 빼고 뺀 종목코드 리턴
}
</script>

