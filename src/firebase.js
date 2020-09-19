import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCSBDt63QvafEA7wjVRAzrMyaYPToa2kBI",
    authDomain: "fullstack-haq.firebaseapp.com",
    databaseURL: "https://fullstack-haq.firebaseio.com",
    projectId: "fullstack-haq",
    storageBucket: "fullstack-haq.appspot.com",
    messagingSenderId: "748325478846",
    appId: "1:748325478846:web:5cde36e6129288602359ef",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};