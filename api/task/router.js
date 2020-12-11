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

module.exports = router;