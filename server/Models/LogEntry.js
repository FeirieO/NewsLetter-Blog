const mongoose = require('mongoose');

  const { Schema } = mongoose;

  const requiredNumber = {
      type: Number,
      required: true,
  },

   defaultRequiredDate = {
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
   
    visitDate: {
        required: true,
        type: Date,
    }, 
}, {
        timmestamps: true,
    });

    
  ;
  const LogEntry = mongoose.model('LogEntry', LogEntrySchema);

  module.exports = LogEntry;