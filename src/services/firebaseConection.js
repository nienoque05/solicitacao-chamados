import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyCPD5oAuqXSnqvUIdSt1E44MGhtyJsO7pI",
    authDomain: "sistema-26784.firebaseapp.com",
    projectId: "sistema-26784",
    storageBucket: "sistema-26784.appspot.com",
    messagingSenderId: "904094315422",
    appId: "1:904094315422:web:92598f07daf307fdcb9c8f",
    measurementId: "G-6B84TG2V2C"
  };
 
  
  if(!firebase.app.lenght){
      firebase.initializeApp(firebaseConfig);
  }
  export default firebase;