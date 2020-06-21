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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;