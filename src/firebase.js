import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5JJUtxMx7Juqa2UXaroCl_T0QvFL8Qw0",
  authDomain: "snapchat-clone-cd8af.firebaseapp.com",
  projectId: "snapchat-clone-cd8af",
  storageBucket: "snapchat-clone-cd8af.appspot.com",
  messagingSenderId: "868748490401",
  appId: "1:868748490401:web:25c9e1ba552ce43f6762e0",
  measurementId: "G-C4GZ578JJT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, storage, provider };
