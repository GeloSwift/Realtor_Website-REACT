// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPrt68w2Dui-pCpDglHeGde2gcbiuzS00",
  authDomain: "realtor-clone-4ff71.firebaseapp.com",
  projectId: "realtor-clone-4ff71",
  storageBucket: "realtor-clone-4ff71.firebasestorage.app",
  messagingSenderId: "7444207018",
  appId: "1:7444207018:web:83e405bbd2b11e3d0407d3",
  measurementId: "G-Y9YBH0XZSS",
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
