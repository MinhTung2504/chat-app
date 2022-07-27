// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARIRpqWdEE17rUaAj-7He5UY9gu0lgcQw",
  authDomain: "chat-app-20393.firebaseapp.com",
  projectId: "chat-app-20393",
  storageBucket: "chat-app-20393.appspot.com",
  messagingSenderId: "794039088806",
  appId: "1:794039088806:web:a577a4f559f9e04b79a667",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, auth, provider };
