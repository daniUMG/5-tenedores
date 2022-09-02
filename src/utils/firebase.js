import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgCdl8dsaK7cTm50gJPn2BtdSBcUjmcTg",
  authDomain: "tenedores-70ecb.firebaseapp.com",
  projectId: "tenedores-70ecb",
  storageBucket: "tenedores-70ecb.appspot.com",
  messagingSenderId: "26228219854",
  appId: "1:26228219854:web:ef5d35c92341738068559f"
};

export const initFirebase = initializeApp(firebaseConfig);