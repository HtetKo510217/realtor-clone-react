// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLNFZuVh0LwdU9N3hS8XuguNyHdUGiHCo",
  authDomain: "realtor-clone-react-11911.firebaseapp.com",
  projectId: "realtor-clone-react-11911",
  storageBucket: "realtor-clone-react-11911.appspot.com",
  messagingSenderId: "1053698886900",
  appId: "1:1053698886900:web:1156c61cad23b5a42ae2a1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()