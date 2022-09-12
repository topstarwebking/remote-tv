require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { signInWithEmailAndPassword } = require("firebase/auth");
const { ref, update, onValue, remove } = require("firebase/database");
const { v4 } = require("uuid");
const { auth, db } = require("./utils/firebase");

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());
var admin = require("firebase-admin");
var { getAuth } = require("firebase-admin/auth");
var serviceAccount = require("./firebase-auth.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-remote-demo-default-rtdb.firebaseio.com",
});

signInWithEmailAndPassword(auth, "udaykiranbujunuri@gmail.com", "Buday@11")
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

// Create new Channel
app.post("/channels/new", checkAuth, async (req, res) => {
  try {
    const updates = {};
    updates["/channels/" + (await v4())] = {
      name: String(req.body.name),
      image: String(req.body.image),
    };
    await update(ref(db), updates).then((e) => {
      res.status(200).send();
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("internal server error");
  }
});

// Delete channel with id
app.delete("/channel/:id", checkAuth, async (req, res) => {
  try {
    let chatRef = ref(db, "/channels/" + req.params.id);
    await remove(chatRef);
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(500).send("internal server error");
  }
});

// Get all channels
app.get("/channels", checkAuth, (req, res) => {
  try {
    const currentChannelRef = ref(db, "channels");
    onValue(
      currentChannelRef,
      (snapshot) => {
        res.status(200).send(snapshot.val());
      },
      { onlyOnce: true }
    );
  } catch (e) {
    console.log(e);
    res.status(500).send("internal server error");
  }
});

function checkAuth(req, res, next) {
  if (!req.headers.authorization)
    return res.status(401).send("Authorization Required");
  getAuth()
    .verifyIdToken(req.headers.authorization)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      next();
    })
    .catch((error) => {
      if (error.code === "auth/argument-error")
        res.status(401).send("Invalid Token");
      else console.log(error);
    });
}
app.listen(PORT, () => {
  console.log("Channels Service Running on " + PORT);
});
