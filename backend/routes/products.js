const express = require('express');
const router = express.Router();
const Products = require('../models/products');

router.get('/', async (req, res) => {
  try {
    const products = await Products.findAll();

    res.status(200).json({
      'Found Products': products,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Products.findOne({
      where: { id },
    });

    if (!product) {
      return res.status(404).json({
        error: 'No product with this id found',
      });
    }

    res.status(200).json({
      'Found Product': product,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, description, price, brand, image } = req.body;

    const product = await Products.create({
      name,
      description,
      price,
      brand,
      image,
    });

    res.status(200).json({ 'Created product': product });
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

    const product = await Products.findOne({ where: { id } });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.update({ name, description, price, brand, image });

    res.status(201).json({ 'Updated product': product });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findOne({ where: { id } });

    if (!product) {
      return res
        .status(404)
        .json({ error: 'Product not found. Could not delete' });
    }

    await Products.destroy({ where: { id } });

    res.status(200).json({ 'Deleted product': id });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
