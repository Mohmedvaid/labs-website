const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: ()=> new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      distance:{
        type: Number,
        default:0
      },
      duration: {
        type: Number,
        default:0
      },
      weight: {
        type: Number,
        default:0
      },
      reps: {
        type: Number,
        default:0
      },
      sets: {
        type: Number,
        default:0
      }
    }
  ],
  totalDuration:{
    type: Number,
    default: 0
  },
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;