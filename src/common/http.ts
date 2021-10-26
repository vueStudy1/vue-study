import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import Vue from 'vue';

const DAUM = 'https://finance.daum.net';
const KRX = 'http://data.krx.co.kr';
const PROXY = 'https://yg01.herokuapp.com/';
const PROXY_ORIGIN = 'https://yg01.herokuapp.com/';

const PROXYS = {
  yg01 : 'https://yg01.herokuapp.com/',
  yg02 : 'https://yg02.herokuapp.com/',
  yg03 : 'https://yg03.herokuapp.com/',
}
//axios.defaults.headers.Origin = 'PROXY_ORIGIN';

const http = {
  proxy: (proxy: string) => {
    if (proxy == 'proxy1') {
      return http.daum1;
    } else if (proxy == 'proxy2') {
      return http.daum2;
    } else if (proxy == 'proxy3') {
      return http.daum3;
    } else {
      return http.daum;
    }
  },
  daum: axios.create({
    baseURL: DAUM,
    headers: {
      Accept: 'application/json',
      authority: 'finance.daum.net',
    }
  }),
  daum1: axios.create({
    baseURL: PROXYS.yg01 + DAUM,
    headers: {
      Accept: 'application/json',
      authority: 'finance.daum.net',
    }
  }),
  daum2: axios.create({
    baseURL: PROXYS.yg02 + DAUM,
    headers: {
      Accept: 'application/json',
      authority: 'finance.daum.net',
    }
  }),
  daum3: axios.create({
    baseURL: PROXYS.yg03 + DAUM,
    headers: {
      Accept: 'application/json',
      authority: 'finance.daum.net',
    }
  }),
  krx: axios.create({
    baseURL: PROXY + KRX,
    headers: {
      Accept: 'application/json',
      //Origin: PROXY_ORIGIN,
    }
  }),
};

const reqInterceptorsSuccess = (config: AxiosRequestConfig) => {
  return config;
};

const reqInterceptorsError = (error: AxiosError) => {

  const vue = new Vue();

  vue.$bvToast.toast(`This is toast number`, {
    title: 'BootstrapVue Toast',
    autoHideDelay: 5000,
    appendToast: false
  });

  return Promise.reject(error);
};

http.daum.interceptors.request.use(reqInterceptorsSuccess, reqInterceptorsError);
http.daum1.interceptors.request.use(reqInterceptorsSuccess, reqInterceptorsError);
http.daum2.interceptors.request.use(reqInterceptorsSuccess, reqInterceptorsError);
http.daum3.interceptors.request.use(reqInterceptorsSuccess, reqInterceptorsError);
http.krx.interceptors.request.use(reqInterceptorsSuccess, reqInterceptorsError);

export default http;
