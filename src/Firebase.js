import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDB_9Uj7-s_zEr561uaiGmLdquNo7klvxk",
  authDomain: "example-project-ef450.firebaseapp.com",
  projectId: "example-project-ef450",
  storageBucket: "example-project-ef450.appspot.com",
  messagingSenderId: "978994073896",
  appId: "1:978994073896:web:9badd10f2277456dbe401d",
  measurementId: "G-K17WDHFCLM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);