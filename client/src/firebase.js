// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6e2e6.firebaseapp.com",
  projectId: "mern-blog-6e2e6",
  storageBucket: "mern-blog-6e2e6.appspot.com",
  messagingSenderId: "545904255620",
  appId: "1:545904255620:web:e7a770b948cb030a6e58d1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
