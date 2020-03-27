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
            required: `Enter a Resistance or Cardio exercise`
            },
            name: {
                type: String,
                trim: true,
                required: `Enter a name for the exercise`
                },
                duration: {
                    type: Number,
                    required: `Enter a number for exercise duration`
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
        }]
},
{

    
}


        

}
});

const Workout = mongoose.model(`Workout`, workoutSchema);

module.exports = Workout;

// user adds their exercise

// name of the exercise
// time
// weight
// sets