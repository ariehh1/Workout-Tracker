"use strict";

const router = require("express").Router();
const workout = require("../models/workout.js");

// Get
router.get("/api/workouts", (req, res) => {
  workout
    .find()
    .then(results => res.json(results))
    .catch(err => res.json(err));
});
// Post
router.post("/api/workouts", (req, res) => {
  workout
    .create({})
    .then(results => res.json(results))
    .catch(err => res.json(err));
});

// Update
