const Category = require('../models/category');  // Ensure this path is correct

// Controller to fetch categories
const GetCategory = async (req, res) => {
  try {
    const categories = await Category.find();  // Fetch categories from MongoDB
    console.log('Fetched Categories:', categories);  // Debugging log to ensure the data is fetched
    res.status(200).json(categories);  // Send the categories as a JSON response
  } catch (err) {
    console.error('Error fetching categories:', err);  // Log errors
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

module.exports = GetCategory;