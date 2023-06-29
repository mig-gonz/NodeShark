const express = require('express');
const styles = express.Router();
const db = require('../models');
const { Style } = db;

// Find all styles
styles.get('/', async (req, res) => {
  try {
    const findAllStyles = await Style.findAll({
      attributes: ['id', 'name', 'gender'],
    });

    res
      .status(200)
      .json({ message: 'Successfully found all styles', data: findAllStyles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Find a style
styles.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const foundStyle = await Style.findOne({
      where: {
        id,
      },
      attributes: ['name', 'gender'],
    });

    res
      .status(200)
      .json({ message: 'Successfully found a style', data: findAllStyles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = styles;
