import http from '@/common/http';
import { AxiosResponse } from 'axios';
import _ from 'lodash';

export default {
  daumKosdaqKospi({ commit }: any, data: any): Promise<AxiosResponse> {
    return http.daum.get('/api/quotes/today?type=DOMESTIC').then((res: any) => {
      return res;
    });
  },
  daumRank({ commit }: any, data: any): Promise<AxiosResponse> {
    return http.daum.get('/api/search/ranks?limit=10').then((res: any) => {
      commit('setDaumRank', res.data);
      return res;
    });
  },
  daumPopular({ commit }: any, data: any): Promise<AxiosResponse> {
    return http.daum.get('/content/debate/popular?type=STOCK&limit=10').then((res: any) => {
      return res;
    });
  },
  daumSearch({ commit }: any, data: any): Promise<AxiosResponse> {
    return http.daum.get(`/api/search?q=${data.code}&pagination=false&page=1&perPage=30`).then((res: any) => {
      return res;
    });
  },
  daumDetailSearch({ commit }: any, data: any): Promise<AxiosResponse> {
    return http.daum.get(`/api/quotes/${data.code}?summary=false&changeStatistics=true`).then((res: any) => {
      return res;
    });
  },
  daumDays({ commit }: any, data: any): Promise<AxiosResponse> {
    return http.daum.get(`/api/quote/${data.code}/days?symbolCode=${data.code}&page=1&perPage=100&pagination=true`).then((res: any) => {
      return res;
    });
  },
  daumTimes({ commit }: any, data: any): Promise<AxiosResponse> {
    return http.daum.get(`/api/quote/${data.symbolCode}/times`, {params: data}).then((res: any) => {
      return res;
    });
  },
  krxAll({ commit }: any, data: any): Promise<AxiosResponse> {
    return http.krx.post(`/comm/bldAttendant/getJsonData.cmd?bld=dbms/MDC/STAT/standard/MDCSTAT01501&mktId=${data.mktId}&trdDd=${data.date}`).then((res: any) => {
      return res;
    });
  },
  krxIndividual({ commit }: any, data: any): Promise<AxiosResponse> {
    return http.krx.post(`/comm/bldAttendant/getJsonData.cmd?bld=dbms/MDC/STAT/standard/MDCSTAT01701&isuCd=${data.code}&strtDd=${data.startDate}&endDd=${data.endDate}`).then((res: any) => {
      return res;
    });
  },
  krxCode({ commit }: any, data: any): Promise<AxiosResponse> {
    return http.krx.post(`/comm/bldAttendant/getJsonData.cmd?bld=dbms/MDC/STAT/standard/MDCSTAT01901&mktId=ALL&share=1&csvxls_isNo=false`).then((res: any) => {
      return res;
    });
  },
  krxKospi({ commit }: any, data: any): Promise<AxiosResponse> {
    return http.krx.post(`/comm/bldAttendant/getJsonData.cmd?bld=dbms/MDC/STAT/standard/MDCSTAT01901&mktId=STK&csvxls_isNo=false`).then((res: any) => {
      return res;
    });
  },
  daumCode({ commit }: any, data: any): Promise<AxiosResponse> {
    return data.fn(`/api/sectors/${data.symbolCode}/includedStocks`, {params: data}).then((res: any) => {
      return res;
    });
  },
  daumCodes({ commit }: any, data: any): Promise<AxiosResponse> {
    return data.fn(`/api/sectors/?includedStockLimit=2&page=1&perPage=30&fieldName=changeRate&order=desc&market=KOSPI&change=RISE&includeStocks=true&pagination=true`, {params: data}).then((res: any) => {
      return res;
    });
  },
}