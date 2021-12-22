<template>
  <nav>
    <div class="navs">
      <div class="nav-panel">
        <div class="nav">
          <div class="link">KOSPI</div>
        </div>
        <template v-for="obj, index in kospi">
          <div class="nav" :key="`kospi${index}`">
            <div class="link" @click="onClick()">{{obj.sectorName}}</div>
          </div>
        </template>
        <div class="nav">
          <div class="link">KOSDAQ</div>
        </div>
        <template v-for="obj, index in kosdaq">
          <div class="nav" :key="`kosdaq${index}`">
            <div class="link" @click="onClick()">{{obj.sectorName}}</div>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 56px;
  left: 0;
  bottom: 0;
  width: 150px;
  overflow: auto;
  height: auto;
  background-color: #2c2c2c;
  color: rgb(223 223 223);
  font-size: 13px;
}
nav::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
nav .navs {
  border-top: 0 none;
  margin-top: 0;
  width: fit-content;
  overflow-y: initial;
}
nav .navs .nav {
  overflow: hidden;
  position: relative;
  height: 21px;
  line-height: 21px;
  cursor: pointer;
  display: block;
  padding: auto;
  padding: 0 0 0 8px;
}
nav .navs .nav:hover {
  background-color: #333333;
}
nav .navs .nav.active {
  background-color: #404040;
}
nav .navs .nav-panel {
  white-space: initial;
  width: 150px;
}
nav .navs .nav i {
  display: block;
  overflow: hidden;
  background-size: 400px 500px;
  float: left;
  margin-right: 5px;
  margin-top: 5px;
  width: 20px;
  height: 14px;
  vertical-align: top;
  text-align: center;
}
nav .navs .nav .link {
  display: initial;
  bottom: 0;
}
nav .navs .nav .link.on {
  font-weight: bold;
  border-bottom: 4px solid #fee500;
}
nav .navs .subtitle {
  display: block;
  color: #b2b2b2;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Sidebar2 extends Vue {
}
</script>