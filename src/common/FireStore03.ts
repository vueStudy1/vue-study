import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

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
}