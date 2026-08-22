const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'my-express-app',
    timestamp: new Date().toISOString(),
  });
});

module.exports = app;
