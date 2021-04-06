import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAG2KgcGPABj69kgD1yip_IhiWobc4UNb4",
    authDomain: "random-posts-8262d.firebaseapp.com",
    databaseURL: "https://random-posts-8262d-default-rtdb.firebaseio.com",
    projectId: "random-posts-8262d",
    storageBucket: "random-posts-8262d.appspot.com",
    messagingSenderId: "612102375522",
    appId: "1:612102375522:web:54e92b2e0a89c61d3b293b",
    measurementId: "G-8KGTSRQ315"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase