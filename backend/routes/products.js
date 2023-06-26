const express = require('express');
const router = express.Router();
const Product = require('../models/products');

router.get('/', async (req, res) => {
  try {
    const foundProducts = await Product.findAll();

    res.status(200).json({
      'Found Products': foundProducts,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const foundProduct = await Product.findOne({
      where: { id },
    });

    if (!foundProduct) {
      return res.status(404).json({
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

router.post('/', async (req, res) => {
  try {
    const { name, description, price, brand, image } = req.body;

    const createdProduct = await Product.create({
      name,
      description,
      price,
      brand,
      image,
    });

    res.status(200).json({ 'Created product': createdProduct });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.patch('/:id', updateProduct);
router.put('/:id', updateProduct);

async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const { name, description, price, brand, image } = req.body;

    const updatedProduct = await Product.findOne({ where: { id } });

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await updatedProduct.update({ name, description, price, brand, image });

    res.status(201).json({ 'Updated product': updatedProduct });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });

    if (!product) {
      return res
        .status(404)
        .json({ error: 'Product not found. Could not delete' });
    }

    await Product.destroy({ where: { id } });

    res.status(200).json({ 'Deleted product': id });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
