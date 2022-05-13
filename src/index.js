// Core import
const express = require('express');

// Router import
const router = require('./routes');

// Start server
const app = express();

// Add middlewares
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Router
app.use('/api', router);

app.listen(3001, () => {
  console.log('Running on port 3001');
});
