// Core import
const express = require('express');
const router = express.Router();

// Route import
const nextMatchRouter = require('./nextMatch.routes'); 

router.use('/nextMatch', nextMatchRouter);

router.get('/team', (req, res, next) => {
  res.send('this is the team');
});

// export router
module.exports = router;

