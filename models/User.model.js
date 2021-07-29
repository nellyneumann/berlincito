const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
    // unique: true -> Ideally, should be unique, but its up to you
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false
  }
});

const User = model("User", userSchema);

module.exports = User;
