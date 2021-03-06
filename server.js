const { PORT } = process.env;
const DB = process.env.DATABASE;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const reviewRouter = require('./routes/reviews');
const studySpaceRouter = require('./routes/studySpace');

const app = express();
console.log(DB);
// start the server
app.use(cors({}));
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use('/reviews', reviewRouter);
app.use('/studySpace', studySpaceRouter);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')));
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

mongoose.connect(DB).then(() => {
  console.log('connected to db');
});

app.listen(
  PORT,
  () => console.log(`Server listening on port ${PORT}.`),
);
