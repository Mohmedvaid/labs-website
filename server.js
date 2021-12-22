const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./routes/user');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public/html'));
app.use(cookieParser());

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then((res) => console.log('Connected to db!'))
  .catch(console.error);

// Middleware
app.use(bodyParser.json());
app.use('/user', user);

// routes
app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
