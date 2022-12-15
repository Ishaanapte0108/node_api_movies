const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//routes
app.get('/', (req,res)=>{
  res.send('We are on home');
});
const pr = require('./routes/posts');
app.use('/posts',pr);
//connect to db
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.DB_CONNECTION,
  ()=>{
    console.log('DB connected');
});

//listening
app.listen(5000);

