import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCsyd3JggcPiKLGHOUlMtDwVxf0Ok7jPLk",
  authDomain: "react-native-auth-e830c.firebaseapp.com",
  databaseURL: "https://react-native-auth-e830c.firebaseio.com",
  projectId: "react-native-auth-e830c",
  storageBucket: "react-native-auth-e830c.appspot.com",
  messagingSenderId: "220406965661",
  appId: "1:220406965661:web:51c2bed58064d06ae07b74",
  measurementId: "G-C7NYE62BGF"
}

firebase.initializeApp(config);

export default firebase;