import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyCSg0L2dT3MjRUdBSq_ojHIMJzACfb-LMc",
    authDomain: "restaurante1-6523c.firebaseapp.com",
    databaseURL: "https://restaurante1-6523c.firebaseio.com",
    projectId: "restaurante1-6523c",
    storageBucket: "restaurante1-6523c.appspot.com",
    messagingSenderId: "842674410278"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase
