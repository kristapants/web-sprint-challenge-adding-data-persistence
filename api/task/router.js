// build your `/api/tasks` router here
const express = require("express");
const Task = require('./model');

const router = express.Router();

router.get("/", (req, res) => {
    Task.get()
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
  if(!req.body.description || !req.body.project_id) {
      res.status(400).json({ message: 'Task must have a description and project id' });
  }
  else {
      const newTask = req.body;
      Task.post(newTask)
          .then(task => {
              res.status(201).json(task[0]);
          })
          .catch(err => {
              res.status(500).json({ message: err.message });
          });
  }
});

module.exports = router;