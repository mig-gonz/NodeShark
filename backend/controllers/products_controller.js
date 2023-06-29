const express = require('express');
const products = express.Router();
const db = require('../models');
const { Product, Brand, Style, Sku, Image } = db;
const { Op } = require('sequelize');

// Find all products
products.get('/', async (req, res) => {
  try {
    const foundAllProducts = await Product.findAll({
      attributes: ['id', 'name', 'description', 'price'],
      include: [
        {
          model: Sku,
          attributes: ['color', 'size'],
        },
        {
          model: Brand,
          attributes: ['name'],
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
      order: [[Brand, 'name', 'ASC']],
      limit: 10,
    });

    res.send({
      message: 'Successfully found all products',
      data: foundAllProducts,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// Find product by it's id
products.get('/:id', async (req, res) => {
  try {
    const foundProduct = await Product.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'name', 'description', 'price'],
      include: [
        {
          model: Sku,
          attributes: ['color', 'size'],
        },
        {
          model: Brand,
          attributes: ['name'],
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
    res
      .status(200)
      .json({ message: 'Successfully found the product', data: foundProduct });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// Find all products by the brand name
products.get('/brands/:brandName', async (req, res) => {
  try {
    const brand = await Brand.findOne({
      where: {
        name: req.params.brandName,
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
          model: Brand,
          attributes: ['name'],
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
      order: [[Brand, 'name', 'ASC']],
    });
    res.status(200).json({
      message: 'Successfully found products by this brand',
      data: foundBrandItems,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

products.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { name, description, price, sku, brandId, styleId, imageId } =
      req.body;

    await Product.update(
      {
        name,
        description,
        price,
        sku,
        brandId,
        styleId,
        imageId,
      },
      {
        where: {
          id,
        },
      }
    );

    const updatedProduct = await Product.findOne({
      where: {
        id,
      },
    });
    res
      .status(200)
      .json({ 'Successfully updated the product': updatedProduct });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

module.exports = products;
