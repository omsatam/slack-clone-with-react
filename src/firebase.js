// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWgDCyTkBcQirSXNfAAogzISMikeCBqls",
  authDomain: "slack-clone-2232e.firebaseapp.com",
  databaseURL: "https://slack-clone-2232e-default-rtdb.firebaseio.com",
  projectId: "slack-clone-2232e",
  storageBucket: "slack-clone-2232e.appspot.com",
  messagingSenderId: "813309241065",
  appId: "1:813309241065:web:54408121632392a4fb7278",
  measurementId: "G-M6PQCTEY5C",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
