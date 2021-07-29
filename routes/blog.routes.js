//routes/project-routes.js

const BlogPost = require("../models/Blogpost.model");

// ...

// POST route => to create a new project
router.post('/blogpost', (req, res, next) => {
    BlogPost.create({
      title: req.body.title,
      description: req.body.description,
      tasks: [],
      owner: req.user._id // <== !!!
    })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });
  // ...
  