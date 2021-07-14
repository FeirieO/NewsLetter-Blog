const mongoose = require('mongoose');

  const { Schema } = mongoose;

  const requiredNumber = {
      type: Number,
      required: true,
  },

  const defaultRequiredDate = {
    type: Date, 
    default: Date.now,

  }
  const LogEntrySchema = new Schema({
    title: requiredString = {
        type: String,
        required: true,
    },  
    description: String,
    comments:   String,
    rating: {
        type : Number,
        min : 0,
        max : 10,
        default :0,
    },
    latitude: {
        requiredNumber,
        min: -90,
        max: 90,

    },
    longitude: {
        requiredNumber,
        min: -180,
        max: 180,
    },
    visitDate: {
        required: true,
        type: Date,
    }, 
}, {
        timmestamps: true,
    });

    
  ;