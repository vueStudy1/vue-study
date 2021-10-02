import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const DAUM = 'https://finance.daum.net';
const KRX = 'http://data.krx.co.kr';
const PROXY = 'https://yg01.herokuapp.com/';
const PROXY_ORIGIN = 'https://yg01.herokuapp.com/';

//axios.defaults.headers.Origin = 'PROXY_ORIGIN';

const http = {
  daum: axios.create({
    baseURL: PROXY + DAUM,
    headers: {
      Accept: 'application/json'
    }
  }),
  krx: axios.create({
    baseURL: PROXY + KRX,
    headers: {
      Accept: 'application/json',
      Origin: PROXY_ORIGIN,
    }
  }),
};

const reqInterceptorsSuccess = (config: AxiosRequestConfig) => {
  return config;
};

const reqInterceptorsError = (error: AxiosError) => {
  return Promise.reject(error);
};

http.daum.interceptors.request.use(reqInterceptorsSuccess, reqInterceptorsError);
http.krx.interceptors.request.use(reqInterceptorsSuccess, reqInterceptorsError);

export default http;
