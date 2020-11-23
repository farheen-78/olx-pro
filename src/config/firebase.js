import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyAsicj53wRneiDNA3otajc7LLpoFjqDrDg",
    authDomain: "reactapp-89c0a.firebaseapp.com",
    databaseURL: "https://reactapp-89c0a.firebaseio.com",
    projectId: "reactapp-89c0a",
    storageBucket: "reactapp-89c0a.appspot.com",
    messagingSenderId: "787124565569",
    appId: "1:787124565569:web:69859277266dae8773f8c0",
    measurementId: "G-8G0M7G52RB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;

