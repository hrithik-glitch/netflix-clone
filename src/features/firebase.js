// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEaU6gLJeqpYQb1YT0cQLA9nW8lgVYBuw",
  authDomain: "netflix-clone2-da78f.firebaseapp.com",
  projectId: "netflix-clone2-da78f",
  storageBucket: "netflix-clone2-da78f.appspot.com",
  messagingSenderId: "752759944193",
  appId: "1:752759944193:web:7b9b6fcc487368de207c00",
  measurementId: "G-SCWWZLVRNN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
