// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBnNaBdXwnyy3dKNfsEB78JawDdpQDGbJU",
  authDomain: "react-practice-app-3.firebaseapp.com",
  projectId: "react-practice-app-3",
  storageBucket: "react-practice-app-3.appspot.com",
  messagingSenderId: "394631314162",
  appId: "1:394631314162:web:63f93b6d56a6f46402ae6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
