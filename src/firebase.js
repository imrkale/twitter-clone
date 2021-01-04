import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOjQwCFep_SOiUQUvbtRY1FJRJAoUR1W4",
    authDomain: "twitter-clone-1555b.firebaseapp.com",
    projectId: "twitter-clone-1555b",
    storageBucket: "twitter-clone-1555b.appspot.com",
    messagingSenderId: "342082666085",
    appId: "1:342082666085:web:c123189adc6ea87976d08c",
    measurementId: "G-D5YB7V86VE"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;