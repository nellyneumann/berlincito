const { Schema, model } = require("mongoose");
const comment = require("./Comment.model");

const blogPostSchema = new Schema({
  title: String,
  postedBy: String,
  date: String,
  text: String,
  tags: [String],
  comment: [{ "postedBy": String, "text": String}],
});

const BlogPost = model("Blogpost", blogPostSchema);

module.exports = BlogPost;
