// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKNJIIEi_S3m4VoneghFgAx96DgjYK1Xg",
  authDomain: "bookcycle-b778e.firebaseapp.com",
  projectId: "bookcycle-b778e",
  storageBucket: "bookcycle-b778e.appspot.com",
  messagingSenderId: "135003699800",
  appId: "1:135003699800:web:bf6ab1933d2b1da5f5282d",
  measurementId: "G-YZ9B9B6N13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
