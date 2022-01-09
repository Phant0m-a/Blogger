const firebase = require('firebase');
firebase.auth.Auth.Persistence.NONE;

var firebaseConfig = {
    apiKey: "AIzaSyBHd50N3vrsVyjUYUa-753UnpZQesUHHWU",
    authDomain: "node-web-app-9a6e2.firebaseapp.com",
    databaseURL: "https://node-web-app-9a6e2-default-rtdb.firebaseio.com",
    projectId: "node-web-app-9a6e2",
    storageBucket: "node-web-app-9a6e2.appspot.com",
    messagingSenderId: "667358112659",
    appId: "1:667358112659:web:adc2bb76a044eb6c425666",
    measurementId: "G-4SXFPNDF2N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//firebase.auth.Auth.Persistence;
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

const dbs = firebase.firestore();
dbs.settings({ timestampsInSnapshot: true });


module.exports = firebase;