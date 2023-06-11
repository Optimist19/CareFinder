// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVXe30Wh8eNdC_2XoOXhE2Q6BnfBzGRjM",
  authDomain: "carefinder-a2534.firebaseapp.com",
  projectId: "carefinder-a2534",
  storageBucket: "carefinder-a2534.appspot.com",
  messagingSenderId: "637840088490",
  databaseURL: "https://carefinder-a2534-default-rtdb.firebaseio.com/",
  appId: "1:637840088490:web:9b6db2225919232b181fd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseDB = getDatabase(app)

export default firebaseDB

