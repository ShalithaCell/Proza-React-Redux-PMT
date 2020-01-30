import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyApolk97Iag5A830yoTd1PyX7fT2adNd34",
    authDomain: "proza-react-redux.firebaseapp.com",
    databaseURL: "https://proza-react-redux.firebaseio.com",
    projectId: "proza-react-redux",
    storageBucket: "proza-react-redux.appspot.com",
    messagingSenderId: "648328740605",
    appId: "1:648328740605:web:98f2703e5add3dc850c894",
    measurementId: "G-7SXKLNPWG8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots : true});

  export default firebase;