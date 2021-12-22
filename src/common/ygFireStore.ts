import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

export default class YgFireStore {
  db: any;

  constructor() {
    const app01 = initializeApp({
      apiKey: "AIzaSyDEs6DONgCYWI9PHVwoB6hdNpd6ZRwsyRY",
      authDomain: "vue-study2.firebaseapp.com",
      projectId: "vue-study2",
      storageBucket: "vue-study2.appspot.com",
      messagingSenderId: "163502189407",
      appId: "1:163502189407:web:d49242f2b746c77c0ca4ea",
      measurementId: "G-WYVMYB77T2"
    });
    
    this.db = getFirestore(app01);
  }

  setDb() {
    this.db = getFirestore();
  }

  // 오늘 upload 날짜를 저장하기
  async setDay() {
    await setDoc(doc(this.db, 'today', 'upload'), {day: this.day});
  }

  // 오늘 upload 했는지 알아내기
  async isDay(code: string, daums: any) {
    const docSnap = await getDoc(doc(this.db, "today", "upload"));
    if (docSnap.exists()) {
      return docSnap.data().day == this.day;
    } else {
      console.log("No such document!");
    }
  }

  get day() {
    const now = new Date();
    return `${now.getFullYear()}:${now.getMonth() + 1}:${now.getDate()}`;
  }

  // finance 데이터 저장
  async setFinance(code: string, daums: any) {
    await setDoc(doc(this.db, "finance", code), { data: daums });
  }

  /* async onRead() {
    try {
      const code = this.code;
      this.isBusy = true;

      const querySnapshot = await getDoc(doc(this.db, "finance", code));

      if (querySnapshot.exists()) {
        this.firebaseDaumTimes = querySnapshot.data().data;
      } else {
        console.log("No such document!");
      }
      this.isBusy = false;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } */

}