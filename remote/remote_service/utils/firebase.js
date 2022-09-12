const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
const { getAuth } = require("firebase/auth");

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

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app);

module.exports = { db, auth };