const express = require('express');
const router = express.Router();
const { sequelize } = require('../database');
const Product = require('../models/products');
const Sku = require('../models/skus');

// Find all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: {
        model: Sku,
        attributes: ['color', 'size'],
      },
      attributes: ['id', 'name', 'description', 'price', 'brand', 'image'],
    });

    res.status(200).json({
      'Found Products': products,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Find a product
router.get('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;

    const foundProduct = await Product.findByPk(productId, {
      include: {
        model: Sku,
        attributes: ['color', 'size'],
      },
    });

    if (!foundProduct) {
      res.status(404).json({
        error: 'No product with this id found',
      });
    }

    res.status(200).json({
      'Found Product': foundProduct,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a product with a SKU
router.post('/', async (req, res) => {
  try {
    const { name, description, price, brand, image, skus } = req.body;

    const newProduct = await Product.create({
      name,
      description,
      price,
      brand,
      image,
    });

    if (skus && skus.length > 0) {
      const createdSkus = [];

      for (const sku of skus) {
        const { color, sizes } = sku;

        for (const size of sizes) {
          const createdSku = await Sku.create({
            productId: newProduct.id,
            color,
            size,
          });

          createdSkus.push(createdSku);
        }
      }

      newProduct.sku = createdSkus;
    }

    res.status(200).json({ 'New product created': newProduct });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a product
router.put('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, description, price, brand, image, skus } = req.body;

    const foundProduct = await Product.findByPk(productId, {
      include: {
        model: Sku,
      },
    });

    const updatedProduct = await foundProduct.update({
      name,
      description,
      price,
      brand,
      image,
    });

    if (skus && skus.length > 0) {
      const updatedSkus = [];

      for (const sku of skus) {
        const { color, sizes } = sku;
      }

      updatedProduct.skus = updatedSkus;
    }

    res.status(200).json({
      'Updated product': updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a specific attribute of a product
router.patch('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, description, price, brand, image, skus } = req.body;

    const foundProduct = await Product.findByPk(productId, {
      include: {
        model: Sku,
      },
    });

    const updatedProduct = await foundProduct.update({
      name,
      description,
      price,
      brand,
      image,
    });

    if (skus && skus.length > 0) {
      const updatedSkus = [];

      for (const sku of skus) {
        const { color, sizes } = sku;
      }

      updatedProduct.skus = updatedSkus;
    }

    res.status(200).json({
      'Updated product': updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a product
router.delete('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;

    const foundProduct = await Product.findByPk(productId);

    if (!foundProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await foundProduct.destroy();

    res.status(200).json({
      'Deleted product': foundProduct,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Bulk delete products
router.delete('/bulkdelete', async (req, res) => {
  await sequelize.query('ALTER SEQUENCE products_id_seq RESTART WITH 1');
  await Product.destroy({ where: {} });

  res.status(200).json({
    'Deleted all products': true,
  });
});

module.exports = router;
