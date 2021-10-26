import Vue from 'vue';
import Vuex from 'vuex';

// 웹 새로고침 시 vuex가 내용이 날아가지 않기 위한 라이브러리 (localStorage)
import createPersistedState from 'vuex-persistedstate';

import common from './common';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    common,
  },
  plugins: [
    createPersistedState({
      paths: ['common.daumRank', 'common.selected'],
    }),
  ],
});

export default store;
