const express = require('express');
require('./services/passport.js');

const app = express();

require('./routes/authRoutes')(app);

// Heroku will set the environment variable with the appropriate port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
