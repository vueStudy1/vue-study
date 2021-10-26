<template>
  <nav>
    <div class="navs">
      <div class="nav-panel">
        <div class="nav active">
          <div class="link">Ai</div>
        </div>
        <div class="nav">
          <div class="link">Me</div>
        </div>
        <div class="nav">
          <div class="link">Security</div>
        </div>
        <div class="nav">
          <div class="link">Talk</div>
        </div>
        <div class="nav">
          <div class="link">Html</div>
        </div>
        <div class="nav">
          <div class="link">Java</div>
        </div>
        <div class="nav">
          <div class="link">Javascript</div>
        </div>
        <div class="nav">
          <div class="link">Flutter</div>
        </div>
        <div class="nav">
          <div class="link">React</div>
        </div>
        <div class="nav">
          <div class="link">Spring</div>
        </div>
        <div class="nav">
          <div class="link">Firebase</div>
        </div>
        <div class="nav">
          <div class="link">Database</div>
        </div>
        <div class="nav">
          <div class="link">Aws</div>
        </div>
        <div class="nav">
          <div class="link">Css</div>
        </div>
        <div class="nav">
          <div class="link">Site</div>
        </div>
        <div class="nav">
          <div class="link">대출</div>
        </div>
        <div class="nav">
          <div class="link">tool</div>
        </div>
        <div class="nav">
          <div class="link">other</div>
        </div>
        <div class="nav">
          <div class="link">review</div>
        </div>
        <div class="nav">
          <div class="link">캠핑</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 32px;
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
export default class Sidebar extends Vue {
  onClickNavLink(name: string) {
    if (!this.isHere(name)) {
      this.$router.push({ name: name });
    }
  }
  isHere(name: string) {
    return this.$route.name === name;
  }
}
</script>