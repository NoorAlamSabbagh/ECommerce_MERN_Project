// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB5Sw9_wT-GUxkFrsAx3lQdgoEovFhZ28",
  authDomain: "ecommerce-shop-bd38c.firebaseapp.com",
  projectId: "ecommerce-shop-bd38c",
  storageBucket: "ecommerce-shop-bd38c.appspot.com",
  messagingSenderId: "934533822523",
  appId: "1:934533822523:web:43a9d3a3817160a4cc841e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;