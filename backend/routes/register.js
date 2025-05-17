const express = require('express');
const router = express.Router();
const GetCategory = require('../productAPI/getCategory');  // Correct path to your controller

router.get('/GetCategory', GetCategory);

module.exports = router;
