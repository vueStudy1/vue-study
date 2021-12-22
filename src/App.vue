<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

/* import { initializeApp } from 'firebase/app'; */

/* const fbConfig = {
  apiKey: "AIzaSyADJodzMYyREz597FdqybAhe6KWGMXbKL8",
  authDomain: "vue-study-68c27.firebaseapp.com",
  projectId: "vue-study-68c27",
  storageBucket: "vue-study-68c27.appspot.com",
  messagingSenderId: "1035904792087",
  appId: "1:1035904792087:web:271945eb441203e3178e52",
  measurementId: "G-9JJ88TFTYK"
}; */

/* const fbConfig = {
  apiKey: "AIzaSyDEs6DONgCYWI9PHVwoB6hdNpd6ZRwsyRY",
  authDomain: "vue-study2.firebaseapp.com",
  projectId: "vue-study2",
  storageBucket: "vue-study2.appspot.com",
  messagingSenderId: "163502189407",
  appId: "1:163502189407:web:d49242f2b746c77c0ca4ea",
  measurementId: "G-WYVMYB77T2"
};


initializeApp(fbConfig); */

@Component({
  components: {
  },
})
export default class App extends Vue {}
</script>

<style>
.toast:not(.show) {
  display: block;
}
.close {
  display: none;
}
</style>