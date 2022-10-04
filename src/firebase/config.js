import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //   apiKey: `${process.env.REACT_APP_FIREBASE_API}`,
  apiKey: "AIzaSyDkCmDJrdIhafKr9qhb4xkBcycNGf1tbnI",
  authDomain: "tolbertco-82d85.firebaseapp.com",
  projectId: "tolbertco-82d85",
  storageBucket: "tolbertco-82d85.appspot.com",
  messagingSenderId: "1016837179775",
  appId: "1:1016837179775:web:f4e18ac591bc4e9762324a",
  measurementId: "G-EQLGRJV387",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const Storage = getStorage();
const Auth = getAuth();

export { db, Auth, Storage };
