"use strict";

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {

    },


}
});

const Workout = mongoose.model(`Workout`, workoutSchema);

module.exports = Workout;

// user adds their exercise

// name of the exercise
// time
// weight
// sets