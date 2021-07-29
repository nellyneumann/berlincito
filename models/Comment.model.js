const { Schema, model } = require("mongoose");


const commentSchema = new Schema({
  postedBy: String,
  date: Date,
  text: String,
});

const comment = model("Comment", commentSchema);

module.exports = comment;
