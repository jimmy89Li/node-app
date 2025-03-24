const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Functionality.
const loggerFile = require('./private/logs/logger.js');

// Middleware.
app.use(express.static('public'));
app.use(
  morgan('common', {
    stream: fs.createWriteStream(loggerFile('access.log'), { flags: 'a' }),
  })
);

// Home page.
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/_index.html'));
});

// About page.
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/_about.html'));
});

// API.
app.use('/api/people', require('./routes/people.js'));

// Everything else.
app.all('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Start the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
  console.log(`Visit http://localhost:${port}`);
});
