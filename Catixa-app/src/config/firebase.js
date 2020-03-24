import  firebase from "firebase";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyD575l_oaGodJjih78MAj8GGFWKagnYug8",
    authDomain: "catixa-6cf9b.firebaseapp.com",
    databaseURL: "https://catixa-6cf9b.firebaseio.com",
    projectId: "catixa-6cf9b",
    storageBucket: "catixa-6cf9b.appspot.com",
    messagingSenderId: "1014629775674",
    appId: "1:1014629775674:web:be7261f9d2e8dbfa4ab803",
    measurementId: "G-JQL1ZS5371"
  };

  firebase.initializeApp(firebaseConfig);

export default firebaseConfig;