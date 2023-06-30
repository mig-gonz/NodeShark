const express = require('express');
const skus = express.Router();
const db = require('../models');
const { Sku } = db;
const { Op } = require('sequelize');

// find all skus
skus.get('/', async (req, res) => {
  try {
    const findAllSkus = await Sku.findAll({
      attributes: ['id', 'color', 'size'],
    });
    res
      .status(200)
      .json({ message: 'Successfully found all skus', data: findAllSkus });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// find a sku
skus.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const foundSku = await Sku.findOne({
      where: {
        id,
      },
      attributes: ['color', 'size'],
    });

    res
      .status(200)
      .json({ message: 'Successfully found a sku', data: findAllSkus });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = skus;
