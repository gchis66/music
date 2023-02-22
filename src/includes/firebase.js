import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDCZQIC1FL__lEoB2E3dTo8_vvEONFQAQ",
  authDomain: "music-da0a0.firebaseapp.com",
  projectId: "music-da0a0",
  storageBucket: "music-da0a0.appspot.com",
  appId: "1:743951512223:web:fad966637189ac845f68aa",
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const usersCollection = db.collection("users");

export { auth, db, usersCollection, storage };
