import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAhFFdLG-fk7xJ80g2KahrvdUSuj-t4AtQ",
    authDomain: "crwn-db-f7f4b.firebaseapp.com",
    databaseURL: "https://crwn-db-f7f4b.firebaseio.com",
    projectId: "crwn-db-f7f4b",
    storageBucket: "crwn-db-f7f4b.appspot.com",
    messagingSenderId: "432234728101",
    appId: "1:432234728101:web:fbba7cc3444d38ceb59b4c",
    measurementId: "G-KT61YH4N5J"
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;