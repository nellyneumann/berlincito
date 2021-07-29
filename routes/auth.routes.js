// routes/auth.routes.js

const express = require("express");
const router = express.Router();

const passport = require("passport");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");

const SALT_ROUNDS = 10;

// require the user model !!!!
const User = require("../models/User.model");

router.post("/signup", (req, res, next) => {
  console.log(`User is signing up`);
  const { username, password, email } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Provide name and password" });
    return;
  }

  // make sure passwords are strong:
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res.status(500).json({
      errorMessage:
        "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.",
    });
    return;
  }

  bcryptjs
    .genSalt(SALT_ROUNDS)
    .then((salt) => bcryptjs.hash(password, salt))
    .then((hashedPassword) => {
      return User.create({
        //
        username,
        // password => this is the key from the User model
        //     ^
        //     |            |--> this is placeholder (how we named returning value from the previous method (.hash()))
        password: hashedPassword,
        email: email,
      })
    })
        .then((userFromDB) => {
          console.log("Newly created user is: ", userFromDB);
          // Send the user's information to the frontend
          // We can use also: res.status(200).json(req.user);
          res.status(200).json(userFromDB);
        })
        .catch((error) => {
          if (error instanceof mongoose.Error.ValidationError) {
            console.log(`Generic validation error.`);
            res.status(500).json({ errorMessage: error.message });

          } else if (error.code === 11000) {
            console.log(`validation error email and username`);
            res.status(500).json({
              errorMessage:
                "Username and E-mail need to be unique. Either username or E-mail are already used.",
            });

          } else {
            next(error);
          }
        }); // close .catch()
    });

// ...
router.post("/login", (req, res, next) => {
  console.log(req.body);

  passport.authenticate(
    "local",
    { successRedirect: "/", failureRedirect: "/login", failureFlash: true },
    (err, theUser, failureDetails) => {
      if (err) {
        res
          .status(500)
          .json({ message: "Something went wrong authenticating user" });
        return;
      }

      if (!theUser) {
        // "failureDetails" contains the error messages
        // from our logic in "LocalStrategy" { message: '...' }.
        res.status(401).json(failureDetails);
        return;
      }

      // save user in session
      req.login(theUser, (err) => {
        console.log(`Authenticating user ${theUser}`);
        if (err) {
          res.status(500).json({ message: "Session save went bad." });
          return;
        }

        // We are now logged in (that's why we can also send req.user)
        res.status(200).json(theUser);
        console.log(req.isAuthenticated());
      });
    }
  )(req, res, next);
});

router.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

router.get("/loggedin", (req, res, next) => {
  console.log(req.body);
  console.log("this is the user from the session: ", req.user);
  console.log(`Checking login, user authenticated: ${req.isAuthenticated()}`);
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

module.exports = router;
