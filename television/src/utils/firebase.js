// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7nK5I08jicSO_wlhFx1olzBSAa0HyO6Q",
  authDomain: "remote-tv-2884b.firebaseapp.com",
  databaseURL: "https://remote-tv-2884b-default-rtdb.firebaseio.com",
  projectId: "remote-tv-2884b",
  storageBucket: "remote-tv-2884b.appspot.com",
  messagingSenderId: "634491774671",
  appId: "1:634491774671:web:83d5a663f43899969479ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;