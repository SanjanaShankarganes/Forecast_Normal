const mongoose = require('mongoose');
const express= require('express');
const app= express();
require('dotenv').config();
const Schema = mongoose.Schema;

const EventSchema = new Schema({
forecastType : {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String, 
    required: true
  },
  duration: {
    type: Number, 
    required: true
  },
  attender: {
    type: String, 
    required: true
  },
  permission: {
    type: String,
    required: true
  },
  crowd: {
    type: Boolean, 
    required: true
  },
  caseHistory: {
    type: String ,
  }
});
const Normal = mongoose.model('Event', EventSchema);
module.exports = Normal;
