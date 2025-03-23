const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware.
app.use(express.static('public'));
// Logger middleware.
const logger = require('./private/logs/logger.js');
app.use(logger);

// Home page.
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/_index.html'));
});

// About page.
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/_about.html'));
});

// Everything else.
app.all('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Start the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
  console.log(`Visit http://localhost:${port}`);
});
