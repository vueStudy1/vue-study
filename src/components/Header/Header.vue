<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">vue study</a>
    
    <div class="navbar-nav">
      <b-dropdown class="mx-1" :text="buttonText">
        <b-dropdown-item @click="onClickDropdown('Youngkyun')">영균</b-dropdown-item>
        <b-dropdown-item @click="onClickDropdown('Jaeeun')">재은</b-dropdown-item>
        <b-dropdown-item @click="onClickDropdown('Sewon')">세원</b-dropdown-item>
        <b-dropdown-item @click="onClickDropdown('Jian')">지안</b-dropdown-item>
        <b-dropdown-item @click="onClickDropdown('Hoon')">훈이</b-dropdown-item>
        <b-dropdown-item @click="onClickDropdown('Soo')">soo</b-dropdown-item>
        <b-dropdown-item @click="onClickDropdown('Jiwon')">지원</b-dropdown-item>
      </b-dropdown>
    </div>
  </header>
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
export default class Header extends Vue {
  buttonText: string = '영균';
  buttonTexts: any = {
    Youngkyun: '영균',
    Jaeeun: '재은',
    Sewon: '세원',
    Jian: '지안',
    Hoon: '훈이',
    Soo: 'soo',
    Jiwon: '지원',
  }

  onClickDropdown(name: string) {
    this.buttonText = this.buttonTexts[name];

    this.$router.push({ name: name });
  }
}
</script>
