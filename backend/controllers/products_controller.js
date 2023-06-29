const express = require('express');
const router = express.Router();
const db = require('../models');
const { Product, Brand, Style, Sku, Image } = db;
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
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
    res.send({ 'Found all products': foundAllProducts });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

module.exports = router;
