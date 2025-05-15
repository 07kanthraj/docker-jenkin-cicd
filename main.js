const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Listen on all IPs
app.listen(8081, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:8081');
});

