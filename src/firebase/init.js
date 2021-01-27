import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBgiMs77f3XC3mTfSWBIGqGYG0L-csFcK8",
    authDomain: "udemi-ninja-smoothies.firebaseapp.com",
    projectId: "udemi-ninja-smoothies",
    storageBucket: "udemi-ninja-smoothies.appspot.com",
    messagingSenderId: "84532322335",
    appId: "1:84532322335:web:77ff09390d7e85c57f352a",
    measurementId: "G-9HSRCTR5TV"
  };
  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);
 firebaseApp.firestore().settings({timestampsInSnapshots:true})
  firebase.analytics();

  // export firestore database
  export default firebaseApp.firestore()