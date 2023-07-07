const express = require('express');
const wishlist = express.Router();
const db = require('../models');
const { WishlistItem, Sku, User, Image } = db;

// retrieve wish list
wishlist.get('/', async (req, res) => {
  try {
    const retrieveWishList = await WishlistItem.findAll({
      include: [
        {
          model: Sku,
          attributes: ['color', 'size', 'style'],
        },
        {
          model: User,
          attributes: ['id', 'firstName', 'lastName', 'email'],
        },
        {
          model: Image,
          attributes: ['url'],
        },
      ],
    });

    res
      .status(200)
      .json({ message: 'Wishlist Retrieved!', data: retrieveWishList });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});