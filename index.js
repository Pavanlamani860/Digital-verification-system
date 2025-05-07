// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore,doc,setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh0nw0oCK3Gx8CHCv9PGmt4rJrCXEXwvM",
  authDomain: "veribank.firebaseapp.com",
  projectId: "veribank",
  storageBucket: "veribank.firebasestorage.app",
  messagingSenderId: "102455537418",
  appId: "1:102455537418:web:88f63ccc57cbcb927794f3"
};    

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

setDoc(doc(db,"cities"))