import * as firebase from 'firebase';

const config = {

apiKey: "AIzaSyDn4ufVfisIp_PQo6P0xHVryh84Wwd10j4",
    authDomain: "libreriafiscalfol-e58fc.firebaseapp.com",
    databaseURL: "https://libreriafiscalfol-e58fc.firebaseio.com",
    projectId: "libreriafiscalfol-e58fc",
    storageBucket: "libreriafiscalfol-e58fc.appspot.com",
    messagingSenderId: "261087759674"
  };
  firebase.initializeApp(config);

export default firebase;