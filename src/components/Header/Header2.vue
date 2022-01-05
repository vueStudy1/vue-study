<template>
  <b-overlay :show="show" rounded="sm" blur='' opacity="0.1">
    <b-navbar type="dark" variant="dark">
      <!-- <b-navbar-brand @click.stop="active = 'Youngkyun'; $router.push({name : 'Youngkyun'});" class="mx-2">{{project}}</b-navbar-brand> -->
      <b-navbar-brand class="mx-2">{{project}}</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <template v-for="_topbar, index in topbars">
            <b-nav-item href="#" :id="_topbar" :key="`${_topbar}_${index}`" @click.stop="selecteTopbar(_topbar)" :active="_topbar == topbar">{{_topbar}}
            </b-nav-item>
            <context-menu :divided="true" :key="_topbar" @select="deleteTopbar(_topbar)">
              <context-menu-item>{{_topbar}} 상단바 제거</context-menu-item>
            </context-menu>
          </template>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <template v-if="project != ''">
            <b-nav-item class="p4">
              <b-input-group size="sm" @submit.stop.prevent>
                <b-form-input v-model="form.topbar" :state="form.topbar != ''" @keyup.enter="addTopbar" placeholder="상단 바"/>
                <b-input-group-append>
                  <b-button size="sm" @click.stop="addTopbar" :disabled="form.topbar == ''">추가</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-nav-item>
          </template>

          <b-nav-item-dropdown ref="dropdown" text="프로젝트 선택" right class="mx-2">
            <b-dropdown-item style="width: 240px;" v-for="project in projects" :key="project" @click="selectedProject(project)">
              {{project}}
              <b-button size="sm" @click.stop="deleteProject(project)" class="float-right">delete</b-button>
            </b-dropdown-item>

            <b-dropdown-divider/>

            <b-dropdown-form>
              <b-input-group size="sm" @submit.stop.prevent>
                <b-form-input v-model="form.input" :state="form.input != ''" placeholder="프로젝트"/>
                <b-input-group-append>
                  <b-button size="sm" @click.stop="addProject" :disabled="form.input == ''">추가</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-dropdown-form>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-overlay>
</template>
<style>
.dropdown-menu-right {
  right: 0 !important;
  left: auto !important;
}
</style>
<style scoped>
.vue-context-menu-list > li {
  padding: 0 9px;
}
.p4 > .nav-link {
  padding: 4px;
}
.float-right {
  float: right;
}
.ml-auto {
  margin-left: auto!important;
}
form.b-dropdown-form {
  padding: 0.25rem 1rem;
}
form.b-dropdown-form:focus {
  outline: none !important;
}
</style>

<script lang="ts">
import { BNavItemDropdown } from "bootstrap-vue";
import Vue from "vue";
import Component from "vue-class-component";
import { FireStore03 } from '@/common';
import { mapGetters } from "vuex";

@Component({
  components: {
  },
  computed: mapGetters({
    project: 'common/getProject',
    topbar: 'common/getTopbar',
  }),
})
export default class Header2 extends Vue {
  project!: string;
  topbar!: string;

  show: boolean = false;
  fireStore: any = null;
  form: any = {
    email: '',
    name: '',
    input: '',
    topbar: '',
    project: 'Select One',
    checked: []
  };

  projects: any = [];
  topbars: any = [];
  $refs!: {
    dropdown: BNavItemDropdown;
  }

  async created() {
    this.fireStore = new FireStore03();
    this.loadProject();

    if(this.project != '') {
      this.loadTopbar();
    }
  }

  async loadProject() {
    this.show = true;
    const arg = await this.fireStore.loadProject();
    this.show = false;
    if(arg != undefined) {
      this.projects = arg.data;
    } else {
      this.projects = [];
    }
  }
  async loadTopbar() {
    this.show = true;
    const arg = await this.fireStore.loadTopbar();
    this.show = false;
    if(arg != undefined) {
      this.topbars = arg.data;
    } else {
      this.topbars = [];
    }
  }

  async addProject() {
    this.projects.push(this.form.input);
    this.show = true;
    await this.fireStore.saveProject(this.projects);
    this.show = false;
    this.form.input = '';
  }

  async deleteProject(deleteProject: string) {
    this.projects = this.projects.filter((project: string) => project != deleteProject);
    this.show = true;
    await this.fireStore.saveProject(this.projects);
    this.show = false;
  }

  selectedProject(project: string) {
    this.form.project = project;
    this.$store.commit('common/setProject', project);
    this.$store.commit('common/setTopbar', '');
    this.loadTopbar();
  }

  async addTopbar() {
    if(this.form.topbar == '') return

    this.topbars.push(this.form.topbar);
    this.show = true;
    await this.fireStore.saveTopbar(this.topbars);
    this.show = false;
    this.form.topbar = '';
  }

  async deleteTopbar(_topbar: string) {
    this.topbars = this.topbars.filter((topbar: string) => topbar != _topbar);
    this.show = true;
    await this.fireStore.saveTopbar(this.topbars);
    this.show = false;
  }

  selecteTopbar(topbar: string) {
    this.$store.commit('common/setTopbar', topbar);
  }
}
</script>