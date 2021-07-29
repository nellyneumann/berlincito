// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");



// Packages used for authentication (Session & Passport)
const session = require('express-session');
const passport = require('passport');
 
// Passport initial setup
require('./config/passport');

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// Session settings: allows our app to maintain the sessions and our users in it
app.use(
    session({
      secret: 'some secret goes here',
      resave: true,
      saveUninitialized: false
    })
  );
   
  // To allow our app to use passport for auth
  app.use(passport.initialize());
  app.use(passport.session());

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js


const authRouter = require('./routes/auth.routes');
app.use('/api/auth', authRouter); 

const eventRouter = require('./routes/events.routes');
app.use('/api', eventRouter);
 


const path = require('path');

app.use(express.static(path.join(__dirname, "/client/build")));

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/client/build/index.html");
});

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);


module.exports = app;
