const express = require('express');
const router = express.Router();
const GetCategory = require('../productAPI/getCategory');  // Correctly import your controller

// Define a route to GET categories
router.get('/get-category', GetCategory);  // Ensure lowercase and use hyphens for best practice

module.exports = router;
