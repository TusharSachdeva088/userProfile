import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo-QyFRtS8m0zA92rhuB1aGfiBCUlayKA",

  authDomain: "login-auth-8d8cd.firebaseapp.com",

  projectId: "login-auth-8d8cd",

  storageBucket: "login-auth-8d8cd.appspot.com",

  messagingSenderId: "497539759585",

  appId: "1:497539759585:web:e38b3a11ab848faebda6a0",

  measurementId: "G-5DQRRPDZDW"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };