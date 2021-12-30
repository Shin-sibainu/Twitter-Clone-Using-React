import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA22ab2NAOYYv3ZE90ME-nr05Q_1OPA0U8",
  authDomain: "twitter-clone-227bd.firebaseapp.com",
  projectId: "twitter-clone-227bd",
  storageBucket: "twitter-clone-227bd.appspot.com",
  messagingSenderId: "5441322184",
  appId: "1:5441322184:web:35a7bb51a43b00c94579fd",
  measurementId: "G-CCGDG3NQYC",
};

const firebaseApp = firebase.initializeaApp(firebase);

const db = firebaseApp.firestore();

export default db;
