<template>
  <b-overlay :show="show" rounded="sm" blur='' opacity="0.1">
    <nav>
      <div class="navs">
        <div class="nav-panel">
          <template v-for="_sidebar, index in sidebars">
            <div class="nav" :key="`${_sidebar}_${index}`" @click.stop="selecteSidebar(_sidebar)" :active="_topbar == topbar">
              <div class="link">{{_sidebar}}</div>
            </div>
            <context-menu :divided="true" :key="_sidebar" @select="deleteSidebar(_sidebar)">
              <context-menu-item>{{_sidebar}} 상단바 제거</context-menu-item>
            </context-menu>
          </template>
          <div class="nav" v-if="project != '' && topbar != ''">
            <div class="link">
              <b-input-group size="sm" @submit.stop.prevent>
                <b-form-input v-model="inputSidebar" :state="inputSidebar != ''" @keyup.enter="addSidebar" placeholder="사이드 바"/>
                <b-input-group-append>
                  <b-button size="sm" @click.enter="addSidebar" :disabled="inputSidebar == ''">추가</b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </b-overlay>
</template>

<style scoped>
nav {
  position: fixed;
  top: 56px;
  left: 0;
  bottom: 0;
  width: 250px;
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
  cursor: pointer;
  display: block;
  padding: auto;
  padding: 4px 8px;
}
nav .navs .nav:hover {
  background-color: #333333;
}
nav .navs .nav.active {
  background-color: #404040;
}
nav .navs .nav-panel {
  white-space: initial;
  width: 250px;
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
  /* vertical-align: top; */
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

.vue-context-menu-list > li {
  padding: 0 9px;
  color: #000;
}
</style>

<script lang="ts">
import { FireStore03 } from '@/common';
import { Vue, Component, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  components: {},
  computed: mapGetters({
    project: 'common/getProject',
    topbar: 'common/getTopbar',
    sidebar: 'common/getSidebar',
 }),
})
export default class Sidebar2 extends Vue {
  project!: string;
  topbar!: string;
  sidebar!: string;

  show: boolean = false;
  fireStore: any = null;

  inputSidebar: string = '';
  sidebars: any = [];

  @Watch('project')
  onProject() {
    this.loadSidebar();
  }

  @Watch('topbar')
  onTopbar() {
    this.loadSidebar();
  }

  async created() {
    this.fireStore = new FireStore03();
    this.loadSidebar();
  }

  async loadSidebar() {
    this.show = true;
    const arg = await this.fireStore.loadSidebar();
    this.show = false;
    if(arg != undefined) {
      this.sidebars = arg.data;
    } else {
      this.sidebars = [];
    }
  }

  async addSidebar() {
    this.sidebars.push(this.inputSidebar);
    this.inputSidebar = '';
    this.show = true;
    await this.fireStore.saveSidebar(this.sidebars);
    this.show = false;
  }

  async deleteSidebar(deleteSidebar: string) {
    this.sidebars = this.sidebars.filter((sidebar: string) => sidebar != deleteSidebar);
    this.show = true;
    await this.fireStore.saveSidebar(this.sidebars);
    this.show = false;
  }

  selecteSidebar(sidebar: string) {
    this.$store.commit('common/setSidebar', sidebar);
  }
}
</script>