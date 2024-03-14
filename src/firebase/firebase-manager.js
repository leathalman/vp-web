// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  addDoc,
  getFirestore,
  Timestamp,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseManager = {
  apiKey: "AIzaSyADhBkCkh_XoJzC6XXOnoNtQQpao8Rg8lI",
  authDomain: "leath4vp.firebaseapp.com",
  projectId: "leath4vp",
  storageBucket: "leath4vp.appspot.com",
  messagingSenderId: "895791154115",
  appId: "1:895791154115:web:2ee49308818acc8362b376",
  measurementId: "G-6JFV68GPHQ",
};

// Initialize Firebase
const app = initializeApp(firebaseManager);
const db = getFirestore(app);

export async function saveData(data) {
  // try {
  //   await addDoc(collection(db, "suggestions"), data);
  //   // console.log("Document written with ID: ", docRef.id); docRef = await addDoc...
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
}

// only used to test permissions settings
export async function loadData() {
  const docRef = doc(db, "users", "SD8Sg9eMCbV6QwK5cxpD");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}
