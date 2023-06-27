const express = require('express');
const router = express.Router();
const { sequelize } = require('../database');

const {
  getAllProducts,
  getProductById,
  getBrandProducts,
  createProduct,
  createBrandProduct,
  updateProduct,
  deleteProduct,
  deleteDataBaseData,
} = require('../handlers/products');

// Find all products
router.get('/', getAllProducts);

// Find a product by it's ID
router.get('/:productId', getProductById);

// Find all of the brands products
router.get('/brands/:brandName', getBrandProducts);

// Create a product from scratch
router.post('/', createProduct);

// Create a new product by an existing brand
router.post('/brands/:brandName', createBrandProduct);

// Update a product
router.patch('/:productId', updateProduct);
router.put('/:productId', updateProduct);

// Delete a product
router.delete('/:productId', deleteProduct);

// Bulk delete DB information
// Commenting out so the route does not work unless i want it to.
// router.delete('delete/bulkdelete', deleteDataBaseData);

module.exports = router;
