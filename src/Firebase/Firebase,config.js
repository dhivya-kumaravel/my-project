// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCarsJ4khStK32q9_xsG1PtqZ3TdBwRrNI",
  authDomain: "job-portal-merrn.firebaseapp.com",
  projectId: "job-portal-merrn",
  storageBucket: "job-portal-merrn.firebasestorage.app",
  messagingSenderId: "297673588126",
  appId: "1:297673588126:web:fad3f71ba14cb21588aa8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;