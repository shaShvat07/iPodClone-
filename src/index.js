import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


// Your web app's Firebase configuration
var firebaseConfig = {
    databaseURL: "https://ipod-8d3f7.firebaseio.com",
    apiKey: "AIzaSyBtxNvYE-jRNCwp_jwV8iwVn3B-DtleCnU",
    authDomain: "ipod-8d3f7.firebaseapp.com",
    projectId: "ipod-8d3f7",
    storageBucket: "ipod-8d3f7.appspot.com",
    messagingSenderId: "758765532357",
    appId: "1:758765532357:web:324e2b18c562a96a026cac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
