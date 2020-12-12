const express = require("express");
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Project.get()
    .then(posts => {
        res.status(200).json(posts);
      })
      .catch(() => {
        res.status(500).json({
          error: "The posts information could not be retrieved."
        });
      });
});

router.post('/', (req, res) => {
  if(!req.body.name) {
      res.status(400).json({ message: 'Project must have a name' });
  }
  else {
      const newProject = req.body;
      Project.post(newProject)
          .then(project => {
              res.status(201).json(project[0]);
          })
          .catch(err => {
              res.status(500).json({ message: err.message });
          });
  }
})

module.exports = router;
