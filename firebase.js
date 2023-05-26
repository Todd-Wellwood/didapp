// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
/*
 Firebase connections for importing to other parts of the app
*/

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAV0r23p97ZgCSz8nlzgXrZGTAb7pTBp6c",
    authDomain: "swen325-auth.firebaseapp.com",
    projectId: "swen325-auth",
    storageBucket: "swen325-auth.appspot.com",
    messagingSenderId: "851314377650",
    appId: "1:851314377650:web:1b4a66549e59a4e4605aab"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {auth,db}