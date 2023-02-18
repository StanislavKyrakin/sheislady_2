import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiMpzyWkdgiL0qqP2_Ag5GGY8B9nw4Sho",
  authDomain: "chat-c2887.firebaseapp.com",
  projectId: "chat-c2887",
  storageBucket: "chat-c2887.appspot.com",
  messagingSenderId: "791722075468",
  appId: "1:791722075468:web:b6a8fee6e165a6f0bbdbe9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
