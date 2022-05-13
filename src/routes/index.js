const express = require('express');
const router = express.Router();

router.get('/nextMatch', (req, res, next) => {
  res.send('this is the next match');
});

router.get('/team', (req, res, next) => {
  res.send('this is the team');
});

// export router
module.exports = router;

