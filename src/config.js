// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAGf1A-8QVp3S0oVabz6cZX-V4iE0FR6PM",
  authDomain: "tailorkhandagale.firebaseapp.com",
  projectId: "tailorkhandagale",
  storageBucket: "tailorkhandagale.appspot.com",
  messagingSenderId: "27845862542",
  appId: "1:27845862542:web:ed7c2de5cefc244b11d5df",
  measurementId: "G-QJ818SBJZF"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };