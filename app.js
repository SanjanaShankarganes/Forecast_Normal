const mongoose = require('mongoose');
const Event = require('./schema'); 
const dotenv = require('dotenv');

dotenv.config();
const URL = process.env.MONGOURL

module.exports = function addData(req,res){

mongoose.connect(URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

console.log(req.body);
const {forecastType}=req.body;
const {place} =req.body;
const {date} = req.body;
const {time}= req.body;
const {duration} =req.body;
const {attender }= req.body;
const {permission}= req.body;
const {crowd}= req.body;
const {caseHistory }=req.body;

const newEvent = new Event({
    forecastType,
  place,
  date,
  time,
  duration,
  attender,
  permission,
  crowd,
  caseHistory,
});
newEvent.save()
  .then(doc => {
    console.log('New event saved:', doc);
    res.send('Event saved successfully');
  })
  .catch(err => {
    console.error('Error saving event:', err);
    res.status(500).send('Error saving event');
  });
}