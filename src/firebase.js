import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAQgVyBuyn0cGQtYuHPPvO0JevNhjalO88",
  authDomain: "react-palet-color.firebaseapp.com",
  databaseURL: "https://react-palet-color-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-palet-color",
  storageBucket: "react-palet-color.appspot.com",
  messagingSenderId: "174872369412",
  appId: "1:174872369412:web:b93555ac6124d6f8711851"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}

