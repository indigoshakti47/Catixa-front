import * as firebase from "firebase";
import 'firebase/database';

var config = {
    apiKey: "AIzaSyDbGtE83z07x13HOb_h8V0GnSwzsAkXhSg",
    authDomain: "catixa-dashboard.firebaseapp.com",
    databaseURL: "https://catixa-dashboard.firebaseio.com",
    projectId: "catixa-dashboard",
    storageBucket: "catixa-dashboard.appspot.com",
    messagingSenderId: "474512234862",
    appId: "1:474512234862:web:987427f667be008f5ac97f",
    measurementId: "G-ZFW84PMYM1"
};

let firebaseConfig=
firebase.initializeApp(
    config
);

const storage = firebase.storage();

export {
    storage, firebaseConfig as default
}
