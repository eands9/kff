import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRBXvUIQZwwJy9FzdwYZBzYdEO5kQ2Q9Q",
  authDomain: "kaifamilyfarm-b4118.firebaseapp.com",
  projectId: "kaifamilyfarm-b4118",
  storageBucket: "kaifamilyfarm-b4118.appspot.com",
  appId: "1:994971546044:web:bbeda9e4d80b7d3e627bb9",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
