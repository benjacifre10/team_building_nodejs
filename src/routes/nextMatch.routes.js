// Core import
const express = require('express');
const router = express.Router();

// Controller import
const { getNextMatchController } = require('../controllers/nextMatch.controller');

router.get('/', getNextMatchController);

module.exports = router;
