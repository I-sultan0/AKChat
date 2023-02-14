import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAaAKtCFPlpPTkNj4b4ebBdfqCqj8yVMJw",
    authDomain: "akchat-90193.firebaseapp.com",
    projectId: "akchat-90193",
    storageBucket: "akchat-90193.appspot.com",
    messagingSenderId: "130894340672",
    appId: "1:130894340672:web:8ad867b9a60037db11b5a5",
    measurementId: "G-KF6V2B8NH3",
  })
  .auth();
