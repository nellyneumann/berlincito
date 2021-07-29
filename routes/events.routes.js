//routes/project-routes.js
const express = require("express");
const router = express.Router();

const berlinEvent = require("../models/Event.model");
const BlogPost = require("../models/Blogpost.model");

// title, postedBy, date, text, tags

router.get("/blogposts", (req, res, next) => {
  BlogPost.find({}).then((posts) => {
    console.log(posts);
    res.status(200).json(posts);
  });
});

// POST route => to create a new event
router.post("/event", (req, res, next) => {
  console.log(req);
  berlinEvent
    .create({
      title: req.body.title,
      description: req.body.description,
      address: req.body.address,
      date: req.body.date,
      organizer: req.body.organizer,
      tags: req.body.tags,
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get("/events", (req, res, next) => {
  console.log(`Getting events`);
  berlinEvent.find({}).then((events) => {
    console.log(events);
    res.status(200).json(events);
  });
});

// POST route => to create a new project
router.post("/blogpost", (req, res, next) => {
  BlogPost.create({
    title: req.body.title,
    postedBy: req.body.postedBy,
    date: req.body.date,
    text: req.body.text,
    tags: req.body.tags,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});



module.exports = router;
