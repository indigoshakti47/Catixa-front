import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


export default function initFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDPBB_1XiPWCYXbDvsyYzPLUCx-Vmyad8c",
    authDomain: "catixa-rating.firebaseapp.com",
    databaseURL: "https://catixa-rating.firebaseio.com",
    projectId: "catixa-rating",
    storageBucket: "catixa-rating.appspot.com",
    messagingSenderId: "221258316336",
    appId: "1:221258316336:web:4883d090c93a9715ba0bf5",
    measurementId: "G-6S9W3DQ5EZ"
  };
  firebase.initializeApp(firebaseConfig);

}