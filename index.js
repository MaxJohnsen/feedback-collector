const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// Heroku will set the environment variable with the appropriate port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
