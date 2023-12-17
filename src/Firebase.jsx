// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfs0CFUDQSYn1lt0qXdwrXIqNeLHDXH9Q",
  authDomain: "chaletpepper.firebaseapp.com",
  databaseURL: "https://chaletpepper-default-rtdb.firebaseio.com",
  projectId: "chaletpepper",
  storageBucket: "chaletpepper.appspot.com",
  messagingSenderId: "254934284999",
  appId: "1:254934284999:web:4b0b8c945b8eea90781ce2",
  measurementId: "G-WEGY6S57CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const imgDB = getStorage(app);
const txtDB = getFirestore(app);

export {imgDB, txtDB};
