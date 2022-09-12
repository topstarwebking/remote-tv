require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { signInWithEmailAndPassword } = require("firebase/auth");
const { ref, update } = require("firebase/database");
const { auth, db } = require("./utils/firebase");
const PORT = process.env.PORT || 3002;
app.use(cors());
app.use(bodyParser.json());
var admin = require("firebase-admin");
var { getAuth } = require("firebase-admin/auth");
var serviceAccount = require("./firebase-auth.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-remote-demo-default-rtdb.firebaseio.com",
});

signInWithEmailAndPassword(auth, "lo.egan918@gmail.com", "rh703918$")
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

app.post("/update", checkAuth, (req, res) => {
  try {
    const updates = {};
    updates["/remote"] = {
      current: req.body.data,
    };
    update(ref(db), updates).then((e) => {
      res.status(200).send();
    });
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
  console.log("Remote Service Running on " + PORT);
});
