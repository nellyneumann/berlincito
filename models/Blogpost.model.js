const { Schema, model } = require("mongoose");

const blogPostSchema = new Schema({
  title: String,
  author: User,
  date: Date,
  text: String,
  tags: [String],
});

const BlogPost = model("Blogpost", blogPostSchema);

module.exports = BlogPost;
