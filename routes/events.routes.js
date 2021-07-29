//routes/project-routes.js
const express = require("express");

const router = express.Router();

const berlinEvent = require("../models/Event.model");

// POST route => to create a new event
router.post('/event', (req, res, next) => {
    console.log(req)
    berlinEvent.create({
      title: req.body.title,
      description: req.body.description,
      address: req.body.address,
      date: req.body.date,
      organizer: req.body.organizer,
      tags: req.body.tags,
    })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });

router.get('/events', (req, res, next) => {
    console.log(`Getting events`);
    berlinEvent.find({}).then(events => {
        console.log(events)
        res.status(200).json(events);

    });
});
  
module.exports = router;
