import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAtdCDLs9mjkOHOogX5MSSOap6T7tFAv4g",
  authDomain: "kaimos-kenya-rotary-club.firebaseapp.com",
  projectId: "kaimos-kenya-rotary-club",
  storageBucket: "kaimos-kenya-rotary-club.appspot.com",
  messagingSenderId: "535412161379",
  appId: "1:535412161379:web:163175bf4fc3fef45a3156",
  measurementId: "G-MVJ5VB61JV",
});

var db = firebaseApp.firestore();

export { db };
