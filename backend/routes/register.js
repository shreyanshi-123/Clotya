const express = require('express');
const router = express.Router();
const GetCategory = require('../productAPI/getCategory');  // Correctly import your controller
const AddUser = require('../productAPI/addUser');

// Define a route to GET categories
router.get('/get-category', GetCategory);  // Ensure lowercase and use hyphens for best practice
router.post('/addUser', AddUser);

module.exports = router;
