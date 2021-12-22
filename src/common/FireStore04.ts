import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

export default class FireStore04 {
  db: any;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyA1UwTwQ3TCBNQaXV5S8XDfJviyb0JZRqI",
      authDomain: "test-6c400.firebaseapp.com",
      projectId: "test-6c400",
      storageBucket: "test-6c400.appspot.com",
      messagingSenderId: "467266706996",
      appId: "1:467266706996:web:3b53a9baee1a1422367461",
      measurementId: "G-7MVM9GNQ0B"
    };
    
    const app04 = initializeApp(firebaseConfig, '04');

    this.db = getFirestore(app04);
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
}