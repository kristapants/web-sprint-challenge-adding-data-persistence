// build your `/api/resources` router here
const express = require("express");
const Resource = require('./model');

const router = express.Router();

router.get("/", (req, res) => {
    Resource.get()
    .then(resources => {
        res.status(200).json(resources);
      })
      .catch(() => {
        res.status(500).json({
          error: "The posts information could not be retrieved."
        });
      });
});

router.post("/", (req, res) => {
  Resource.post(req.body)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
})

module.exports = router;