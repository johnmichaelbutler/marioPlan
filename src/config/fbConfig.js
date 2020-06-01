// imports core functionaltiy using /app
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDe8ZTjiZsaggv14C0jqGifVE4m87GUM5Q",
  authDomain: "marioplan-8b34e.firebaseapp.com",
  databaseURL: "https://marioplan-8b34e.firebaseio.com",
  projectId: "marioplan-8b34e",
  storageBucket: "marioplan-8b34e.appspot.com",
  messagingSenderId: "312417872634",
  appId: "1:312417872634:web:9df6c4d7792f40e6c9b743",
  measurementId: "G-P63R62M5BB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;