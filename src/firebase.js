import firebase from "firebase/compat/app";//v9
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9


const firebaseConfig = {
  apiKey: "AIzaSyDQ2O1161xXTAKEi48u_dTsBteNwo0Jn8c",
  authDomain: "dreamltd-349e7.firebaseapp.com",
  projectId: "dreamltd-349e7",
  storageBucket: "dreamltd-349e7.appspot.com",
  messagingSenderId: "341005816316",
  appId: "1:341005816316:web:867384d003efcc7b01e279",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;









