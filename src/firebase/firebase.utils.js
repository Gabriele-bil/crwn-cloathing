import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAOXOLbCyXHasABrwv4w0l_6dXDBF5GEM4",
  authDomain: "crwn-db-9aa0d.firebaseapp.com",
  projectId: "crwn-db-9aa0d",
  storageBucket: "crwn-db-9aa0d.appspot.com",
  messagingSenderId: "892757369653",
  appId: "1:892757369653:web:c945b27348497c9085627c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
