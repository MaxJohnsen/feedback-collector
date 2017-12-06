const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport.js');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // To reach this code, the request's route is not recognized,
  // and we are in a production environment

  // Check if the request are for production assets such as main.js and main.css
  app.use(express.static('client/build'));

  // If not:
  // Express will serve up the index.html file (front-end), and React-Router
  // will use the route to decide which component to show
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('__dirname', 'client', 'build', 'index.html'));
  });
}

// Heroku will set the environment variable with the appropriate port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
