const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const tourisms = require("../bin/data");
const Tourism = require("../models/Tourism");

PushSomeData = () => {
  Tourism.insertMany(tourims)
    .then(dbRes => {
      dbRes.forEach(oneTourism => console.log(oneTourism));
    })
    .catch(dbErr => {
      console.log(dbErr);
    });
};

PushSomeData();

module.exports = router;
