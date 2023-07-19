const express = require('express');
const router = express.Router();

router.use('/people', require('./peopleRouter'));




module.exports = router;