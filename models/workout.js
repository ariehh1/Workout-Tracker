"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
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
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);
workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
