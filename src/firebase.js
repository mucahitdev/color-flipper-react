import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: process.env.REACT_APP_AUTH,
  databaseURL: process.env.REACT_APP_URL,
  projectId: "react-palet-color",
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_MES_SEND_ID,
  appId: process.env.REACT_APP_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}

