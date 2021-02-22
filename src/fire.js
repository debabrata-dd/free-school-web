import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB8VxaXzbU53qhuT5TOjl2wJKjh9eWBCGg",
  authDomain: "freeschool-357ba.firebaseapp.com",
  projectId: "freeschool-357ba",
  storageBucket: "freeschool-357ba.appspot.com",
  messagingSenderId: "790539182088",
  appId: "1:790539182088:web:219a76a006a2386c3371bd",
  measurementId: "G-GBW4EKRYPR",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
