const express = require('express');
const brands = express.Router();
const db = require('../models');
const { Product, Brand, Style, Sku, Image } = db;
const { Op } = require('sequelize');

// Find all brands
brands.get('/', async (req, res) => {
  try {
    const findAllBrands = await Brand.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: Product,
          attributes: ['id', 'name', 'description', 'price'],
        },
      ],
    });

    res.status(200).json(findAllBrands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Find a brand based on it's name
brands.get('/:brandName', async (req, res) => {
  try {
    const { brandName } = req.params;

    const brand = await Brand.findOne({
      where: {
        name: brandName,
      },
    });

    const foundBrandItems = await Product.findAll({
      attributes: ['id', 'name', 'description', 'price'],
      include: [
        {
          model: Sku,
          attributes: ['color', 'size'],
        },
        {
          model: Image,
          attributes: ['url'],
        },
        {
          model: Style,
          attributes: ['name'],
        },
      ],
      where: {
        brandId: brand.id,
      },
    });

    res.status(200).json(foundBrandItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Find a product based on it's id to that brand
brands.get('/:brandName/:productId', async (req, res) => {
  try {
    const { brandName, productId } = req.params;

    // Retrieve the brandId based on the brandName
    const brand = await Brand.findOne({
      where: {
        name: brandName,
      },
    });

    if (!brand) {
      return res.status(404).json({ message: 'This is not one of our brands' });
    }

    // Query the Product table with the converted brandId and productId
    const brandProduct = await Product.findOne({
      where: {
        id: productId,
        brandId: brand.id,
      },
      attributes: ['id', 'name', 'description', 'price'],
      include: [
        {
          model: Sku,
          attributes: ['color', 'size'],
        },
        {
          model: Image,
          attributes: ['url'],
        },
        {
          model: Style,
          attributes: ['name'],
        },
      ],
    });

    if (!brandProduct) {
      return res.status(404).json({ message: 'No product found with this id' });
    }

    res.status(200).json(brandProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

brands.post('/new', async (req, res) => {
  try {
    const { name } = req.body;

    const createdBrand = await Brand.create({
      name,
    });

    if (!createdBrand) {
      res.status(500).json({ message: 'Failed to create this brand' });
    }

    res
      .status(200)
      .json({ message: 'Successfully created a brand', data: createdBrand });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a brand product
brands.patch('/:brandName/:productId', async (req, res) => {
  try {
    const { brandName, productId } = req.params;
    const brand = await Brand.findOne({
      where: {
        name: brandName,
      },
    });

    if (!brand) {
      return res.status(404).json({ message: 'This is not one of our brands' });
    }

    const brandProduct = await Product.findOne({
      where: {
        id: productId,
        brandId: brand.id,
      },
      attributes: ['id', 'name', 'description', 'price'],
      include: [
        {
          model: Sku,
          attributes: ['color', 'size'],
        },
        {
          model: Image,
          attributes: ['url'],
        },
        {
          model: Style,
          attributes: ['name'],
        },
      ],
    });

    if (!brandProduct) {
      return res.status(404).json({ message: 'No product found with this id' });
    }

    const { name, description, price, sku, brandId, styleId, imageId } =
      req.body;

    await brandProduct.update({
      name,
      description,
      price,
      imageId,
    });

    res
      .status(200)
      .json({ message: 'Product successfully updated', data: brandProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

brands.delete('/:brandName', async (req, res) => {
  try {
    const { brandName } = req.params;

    const brand = await Brand.findOne({
      where: {
        name: brandName,
      },
    });

    if (!brand) {
      return res.status(404).json({ message: 'This is not one of our brands' });
    }

    await brand.destroy();

    res.status(200).json({ message: 'Successfully deleted the brand' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = brands;
