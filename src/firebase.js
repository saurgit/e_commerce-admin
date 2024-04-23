// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqX1pWLdex9JfNsA2b9st0YyX1NRmkJyU",
  authDomain: "shop-291ec.firebaseapp.com",
  projectId: "shop-291ec",
  storageBucket: "shop-291ec.appspot.com",
  messagingSenderId: "1046322299596",
  appId: "1:1046322299596:web:f182ae92bf31e998167869",
  measurementId: "G-25NSF0EXRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;