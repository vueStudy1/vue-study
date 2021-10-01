import Vue from 'vue';
import Vuex from 'vuex';

// 웹 새로고침 시 vuex가 내용이 날아가지 않기 위한 라이브러리 (localStorage)
import createPersistedState from 'vuex-persistedstate';
// 높은 수준의 암호화 및 데이터 압축으로 localStorage 데이터를 보호합니다.
import SecureLS from 'secure-ls';
const ls = new SecureLS({ isCompression: false });

import common from './common';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    common,
  },
  plugins: [
    createPersistedState({
      paths: [],
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});

export default store;
