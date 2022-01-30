<template>
  <div>
    <div class="p-2">
      <b-button size="sm" @click="onAdd"><b-icon icon="plus" aria-hidden="true"></b-icon> add</b-button>
      <b-button size="sm" @click="onRefresh" class="mx-1"><b-icon icon="arrow-clockwise" aria-hidden="true"></b-icon> refresh</b-button>
      <b-button size="sm" @click="onSave"><b-icon icon="cloud-upload" aria-hidden="true"></b-icon> save</b-button>
      <b-button size="sm" @click="onSave"><b-icon icon="cloud-upload" aria-hidden="true"></b-icon> save</b-button>

      <b-table :items="items" :fields="fields" class="mt-3 align-self-center" dark striped borderless hover small>
        <template #cell(no)="row">
          <div>{{ row.index + 1 }}</div>
        </template>
        <template #cell(registrationDate)="data">
          <b-form-datepicker v-model="data.item.registrationDate" size="sm" locale="kr" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"/>
        </template>
        <template #cell(requirements)="data">
          <b-input v-model="data.item.requirements" size="sm"/>
        </template>
        <template #cell(manager)="data">
          <b-dropdown :text="data.item.manager" size="sm">
            <b-dropdown-item @click="data.item.manager = '정영균'">정영균</b-dropdown-item>
            <b-dropdown-item @click="data.item.manager = '최진희'">최진희</b-dropdown-item>
          </b-dropdown>
        </template>
        <template #cell(state)="data">
          <b-dropdown :text="data.item.state" size="sm">
            <b-dropdown-item @click="data.item.state = '시작되지 않음'">시작되지 않음</b-dropdown-item>
            <b-dropdown-item @click="data.item.state = '진행중'">진행중</b-dropdown-item>
            <b-dropdown-item @click="data.item.state = '완료'">완료</b-dropdown-item>
            <b-dropdown-item @click="data.item.state = '중지'">중지</b-dropdown-item>
          </b-dropdown>
        </template>
        <template #cell(dueDate)="data">
          <b-form-datepicker v-model="data.item.dueDate" size="sm" locale="kr" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"/>
        </template>
        <template #cell(endDate)="data">
          <b-form-datepicker v-model="data.item.endDate" size="sm" locale="kr" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"/>
        </template>
        <template #cell(writer)="data">
          <b-dropdown :text="data.item.writer" size="sm">
            <b-dropdown-item @click="data.item.writer = '정영균'">정영균</b-dropdown-item>
            <b-dropdown-item @click="data.item.writer = '최진희'">최진희</b-dropdown-item>
          </b-dropdown>
        </template>
        <template #cell()="row">
          <b-button @click="row.toggleDetails" size="sm">상세보기</b-button>
        </template>
        <template #row-details="row">
          <b-form-textarea v-model="row.item.note" size="sm" placeholder="Enter something..." rows="3" max-rows="6"/>
        </template>
      </b-table>
    </div>
    <context-menu :divided="true" :key="_sidebar" @select="addColumn">
      <context-menu-item>컬럼 추가</context-menu-item>
    </context-menu>
  </div>
</template>

<style scoped>
div.p-2 {
  height: calc(100vh - 56px);
}
table {
  vertical-align: middle !important;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import { FireStore03 } from '@/common';

@Component({
 components: {
 },
 computed: mapGetters({
 }),
})
export default class Youngkyun extends Vue {
  fireStore: any = null;
  fields: Array<{key?: string, label: string}> = [
    { key: 'no', label: 'no'},
    { key: 'registrationDate', label: '등록일'},
    { key: 'requirements', label: '요구사항 & 이슈사항'},
    { key: 'manager', label: '담당자'},
    { key: 'state', label: '진행구분'},
    { key: 'dueDate', label: '예정일'},
    { key: 'endDate', label: '종료일'},
    { key: 'writer', label: '작성자'},
    { label: '상세'},
  ];
  options: Array<{value: string | null, text: string, disabled?: boolean}> = [
    { value: null, text: 'Please select an option' },
    { value: '정영균', text: '정영균' },
    { value: '최진희', text: '최진희' },
    { value: 'd', text: 'This one is disabled', disabled: true }
  ];
  items: any = [];

  async created() {
    this.fireStore = new FireStore03();
    this.getData();
  }

  onAdd() {
    this.items.push({registrationDate: '', requirements: '', manager: '', state: '', dueDate: '', endDate: '', writer: '', note: ''});
  }
  onRefresh() {
    this.getData();
  }
  onSave() {
    // 저장할때는 반드시 상세보기 닫기하고 저장되어야 함.
    this.fireStore.setData(this.items);
    return;
  }

  addColumn() {
    this.fields.push({key: 'test', label: 'test'});
  }
  
  async getData() {
    this.items = (await this.fireStore.getData()).data;
  }
}
</script>