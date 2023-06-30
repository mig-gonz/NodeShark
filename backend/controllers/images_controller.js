const express = require('express');
const images = express.Router();
const db = require('../models');
const { Product, Image } = db;
const { Op } = require('sequelize');

// Find all images
images.get('/', async (req, res) => {
  try {
    const findAllImages = await Image.findAll({
      attributes: ['id', 'url'],
      include: [
        {
          model: Product,
          attributes: ['name'],
        },
      ],
    });
    res
      .status(200)
      .json({ message: 'Successfully found all images', data: findAllImages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Find an image
images.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const foundImage = await Image.findOne({
      where: {
        id,
      },
      attributes: ['id', 'url'],
    });
    res.status(200).json(foundImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = images;
