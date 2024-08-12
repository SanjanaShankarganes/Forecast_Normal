const mongoose = require('mongoose');
const express= require('express');
const bodyParser = require('body-parser');

const addData = require('./app.js');
const app= express();
app.use(bodyParser.json());
app.use('/',addData);
app.listen(3000,()=>{console.log("running server")});

