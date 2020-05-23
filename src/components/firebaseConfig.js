// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqZ3mfzCmL6fjwFfqy_9dppz1jdMeRv0I",
  authDomain: "vuegram-dc8f9.firebaseapp.com",
  databaseURL: "https://vuegram-dc8f9.firebaseio.com",
  projectId: "vuegram-dc8f9",
  storageBucket: "vuegram-dc8f9.appspot.com",
  messagingSenderId: "794935672222",
  appId: "1:794935672222:web:d5651a6c2eeb175eca6a8f",
  measurementId: "G-LZF94V88WL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
};
db.settings(settings);

// firebase collections
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
};
