const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'my-express-app',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`my-express-app listening on port ${PORT}`);
});
