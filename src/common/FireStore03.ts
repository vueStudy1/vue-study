/* 
yg.03 / test
파이어스토어 연결 모듈

// 프로그램 제목 프젝 관리 도구

// 프로젝트 : 프로젝트 명 (우측 상단에서 변경 가능)

project save ['','','',]
project load

// 상단바에 오게 될 내용 (분류) : 프로젝트, 계획, 설계, 정의, 구현, 테스트, 운영, 회의 및 보고, 추후 작업, 참고자료 등..

key: project name
topbar save ['','','']
topbar load

// 사이드 바에 오게 될 내용 (문서) : url 정책, flow 정의, 기능리스트 정의, 화면 정의, db 정의서, 아이디어, 모듈 구조, 이슈리스트, 피드백, 업데이트 히스토리, 사용 라이브러리, 회의, 추후 작업, 참고자료, 에러 리스트, class, 기타 등등..

key: project name
sidebar save ['','','']
sidebar load

// 데이터에 오게 될 내용 : 사이드바에 있는 내용의 상세한 내용

data save
data load

// 데이터에서 사용할 컬럼 정의 : type (날짜, 선택박스, 문자열), name

column save
column load

// 선택박스 정의 : ture

selectedbox save
selectedbox laod

*/

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import store from '../store';

export default class FireStore03 {
  db: any;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCZIBTWtDQ3RrFd5i9fTfQwhJgmVVbbmZQ",
      authDomain: "test-528fb.firebaseapp.com",
      projectId: "test-528fb",
      storageBucket: "test-528fb.appspot.com",
      messagingSenderId: "547013844923",
      appId: "1:547013844923:web:bb3cf2e843033e7891ee9e",
      measurementId: "G-6SWXL32X5M"
    };
    
    const app03 = initializeApp(firebaseConfig, '03');
    
    this.db = getFirestore(app03);
  }

  // finance 데이터 저장
  async saveTopBar(data: any) {
    await setDoc(doc(this.db, "data", '01'), { data: data }); // 단일 문서
    //await setDoc(doc(this.db, "data", '01'), { data: data }, { merge: true }); // 병합 옵션 (덮어쓰기 방지)
  }

  // finance 데이터 저장
  async setData(data: any) {
    await setDoc(doc(this.db, "data", '01'), { data: data });
  }

  async getData() {
    const docSnap = await getDoc(doc(this.db, "data", "01"));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }

  // 프로젝트 : 프로젝트 명 (우측 상단에서 변경 가능)
  async saveProject(data: any) {
    await setDoc(doc(this.db, "project", 'list'), { data: data });
  }
  async loadProject() {
    const docSnap = await getDoc(doc(this.db, "project", "list"));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }

  // 상단바에 오게 될 내용 (분류) : 프로젝트, 계획, 설계, 정의, 구현, 테스트, 운영, 회의 및 보고, 추후 작업, 참고자료 등..
  async saveTopbar(data: any) {
    await setDoc(doc(this.db, "topbar", store.getters['common/getProject']), { data: data });
  }
  async loadTopbar() {
    const docSnap = await getDoc(doc(this.db, "topbar", store.getters['common/getProject']));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }

  // 사이드 바에 오게 될 내용 (문서) : url 정책, flow 정의, 기능리스트 정의, 화면 정의, db 정의서, 아이디어, 모듈 구조, 이슈리스트, 피드백, 업데이트 히스토리, 사용 라이브러리, 회의, 추후 작업, 참고자료, 에러 리스트, class, 기타 등등..
  async saveSidebar(data: any) {
    await setDoc(doc(this.db, "sidebar", `sidebar - ${store.getters['common/getProject']} ${store.getters['common/getTopbar']}`), { data: data });
  }
  async loadSidebar() {
    const docSnap = await getDoc(doc(this.db, "sidebar", `sidebar - ${store.getters['common/getProject']} ${store.getters['common/getTopbar']}`));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }
}