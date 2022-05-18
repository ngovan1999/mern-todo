// routes/api/books.js

const express = require("express");
const users = require("../models/user.model");
const router = express.Router();

router.get("/", (req, res) => {
  users
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ message: "No Books found" }));
});

router.post("/Login", (req, res) => {
  const { email, password } = req.body;
  users.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login sucess", user: user._id });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send("not register");
    }
  });
});
router.post("/Register", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  users.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "user already exist" });
    } else {
      const user = new users({ name, email, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "sucessfull" });
        }
      });
    }
  });
});

module.exports = router;
