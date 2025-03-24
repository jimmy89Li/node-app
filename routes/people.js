const express = require('express');
const router = express.Router();
const { getPeople } = require('../controllers/people.js');

router.get('/', getPeople);

module.exports = router;
