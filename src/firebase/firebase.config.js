// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZvP6_qWZ1VBYBT8gQ-wlqbeB87-TKRoA",
  authDomain: "buro-autos.firebaseapp.com",
  projectId: "buro-autos",
  storageBucket: "buro-autos.appspot.com",
  messagingSenderId: "121465162053",
  appId: "1:121465162053:web:dd3efbef5ca9dce1b4162c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;