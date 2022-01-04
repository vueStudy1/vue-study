import Vue from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import { firestorePlugin } from 'vuefire';

import ContextMenu from 'add-context-menu';
import ContextMenuItem from 'add-context-menu';

Vue.use(ContextMenu);
Vue.use(ContextMenuItem);

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

// vuefire 연동
Vue.use(firestorePlugin);

const W: any = window;

W.instance = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')