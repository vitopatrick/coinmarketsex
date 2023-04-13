import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChiWCkhyUMD8rsIjilJbxenoHxJi9q4YQ",
  authDomain: "astrofxfast-d5655.firebaseapp.com",
  projectId: "astrofxfast-d5655",
  storageBucket: "astrofxfast-d5655.appspot.com",
  messagingSenderId: "77214940586",
  appId: "1:77214940586:web:a58b96da54589596ac7fd3",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
