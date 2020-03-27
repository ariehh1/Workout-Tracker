"use strict";

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
            type: String,
            trim: true,
            required: `Exercise is Required`
            },
            name: {
                type: String,
                trim: true,
                required: `First Name is Required`
                },
                duration: {
                    type: Number,
                    required: `Enter a number for duration`
                },
        }
    ]


        

}
});

const Workout = mongoose.model(`Workout`, workoutSchema);

module.exports = Workout;

// user adds their exercise

// name of the exercise
// time
// weight
// sets