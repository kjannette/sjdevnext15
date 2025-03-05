// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjcMmQmTtoqV90jltkSFoqcP0a0Wkdw2c",
  authDomain: "peitho-e69dc.firebaseapp.com",
  projectId: "peitho-e69dc",
  storageBucket: "peitho-e69dc.firebasestorage.app",
  messagingSenderId: "237955047524",
  appId: "1:237955047524:web:7252afd767a32ee70f3f71",
};

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} from "./secrets";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export const signInUser = async (email, password) => {
  if (!email && !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const userStateListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const SignOutUser = async () => await signOut(auth);

export { auth };
export { db };
