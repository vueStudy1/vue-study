import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

export default class YgFireStore {
  db: any;

  constructor() {
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
}