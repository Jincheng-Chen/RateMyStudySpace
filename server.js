const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const reviewRouter = require('./routes/reviews');
const studySpaceRouter = require('./routes/studySpace');

const app = express();

// start the server
app.use(cors({}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/review', reviewRouter);
app.use('/studySpace', studySpaceRouter);

mongoose.connect('mongodb+srv://root:1d6r47fuRdFgYueF@ratemystudyspace.yc6u7ly.mongodb.net/test').then(() => {
  console.log('connected to db');
});

app.listen(
  3000,
  () => console.log('Server listening on port 3000.'),
);
