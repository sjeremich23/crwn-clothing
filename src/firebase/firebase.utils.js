import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCuaWQevuyg05v8l1iln1x4Pfwxrcbp0EU",
  authDomain: "crwn-db-8baa2.firebaseapp.com",
  databaseURL: "https://crwn-db-8baa2.firebaseio.com",
  projectId: "crwn-db-8baa2",
  storageBucket: "crwn-db-8baa2.appspot.com",
  messagingSenderId: "949056185665",
  appId: "1:949056185665:web:a2561fabf84e392288adc0",
  measurementId: "G-2RLKNQYN16"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
