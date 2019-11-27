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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // eslint-disable-next-line no-use-before-define
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
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("Error Creating User", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
