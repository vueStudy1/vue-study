import axios, { AxiosResponse } from 'axios';

export default class Daum {
  baseURL: string = 'https://finance.daum.net';
  http: any = axios.create({
    baseURL: this.baseURL,
    headers: {
      Accept: 'application/json'
    }
  });

  constructor() {
  }

  includedStocks(symbolCode: string, page: number): Promise<AxiosResponse> {
    return this.http.get(`/api/sectors/${symbolCode}/includedStocks`, {params: {
      symbolCode: symbolCode,
      page: page,
      perPage: 100,
    }});
  }

  // 코스피 전체 업종
  kospi(): Promise<AxiosResponse> {
    return this.http.get(
      `/api/sectors/`,
      {
        params: {
          includedStockLimit: 2,
          page: 1,
          perPage: 30,
          fieldName: 'changeRate',
          order: 'desc',
          market: 'KOSPI',
          change: 'RISE',
          includeStocks: true,
          pagination: true,
        }
      }
    );
  }

  kosdaqParam: any = {
    includedStockLimit: 2,
    page: 1,
    perPage: 40,
    fieldName: 'changeRate',
    order: 'desc',
    market: 'KOSDAQ',
    change: 'RISE',
    includeStocks: true,
    pagination: true,
  }

  // 코스닥
  kosdaq(): Promise<AxiosResponse> {
    return this.http.get(`/api/sectors/`, { params: this.kosdaqParam });
  }

  promise(url: string, param: any): Promise<AxiosResponse> {
    return this.http.get(url, { params: param });
  }

  // accTradePrice: 135133
  // accTradeVolume: 29984
  // change: "RISE"
  // changePrice: 20.38
  // changeRate: 0.0393755555
  // chartSlideImage: null
  // code: "D0011006"
  // date: "2021-11-05"
  // foreignStraightPurchasePrice: 4338808819
  // includedStocks: [{name: "일정실업", code: "KR7008500001", symbolCode: "A008500", tradePrice: 28600, change: "RISE",…},…]
  // institutionStraightPurchasePrice: 7593210961
  // market: "KOSPI"
  // prevClosingPrice: 517.58
  // sectorCode: "006"
  // sectorName: "섬유의복"
  // symbolCode: "D0011006"
  // tradePrice: 537.96

  // 어제 주가 - 오늘 주가
  주가의변동률(어제주가 : any, 오늘주가: any) {
    // 현제시간 >> Time.현제시간
    return 어제주가.현제시간 - 오늘주가.현제시간;
  }

  // 시간대별 주가
  times(symbolCode: string, page: number) {
    const result = this.http.get(`/api/quote/${symbolCode}/times`, { params: {
      symbolCode: symbolCode,
      page: page,
      perPage: 100,
      pagination: true,
    }});

    // 총 페이지 수 만큼 호출 한 다음 합쳐서 리턴 해줘야 함...
    if(result.data.totalPages > 1) {
      let arr: Array<any> = [];
      // loop result.data.totalPages 수 만큼 
      // {
      arr = [...arr, ...result.data.data];
      // }
      return arr;
    } else {
      return result.data.data;
    }
  }

  // "totalPages": 4, << 총 페이지 수만큼 돈 다음 합친다음 리턴 해줘야 함...
  // "currentPage": 1,
  // "pageSize": 100
  
  // accTradePrice: 168768650
  // accTradeVolume: 6445
  // askTradePrice: null
  // bidTradePrice: null
  // change: "RISE"
  // changePrice: 1700
  // changeRate: 0.0684104628
  // date: "2021-11-05 10:30:05"
  // highPrice: 26550
  // lowPrice: 26550
  // openingPrice: 26550
  // periodTradePrice: 59657850
  // periodTradeVolume: 2247
  // prevClosingPrice: 24850
  // symbolCode: null
  // tradePrice: 26550
  // tradeTime: "10:30:05"

  // 특정 종목 종합
  // 시간별 주가
}