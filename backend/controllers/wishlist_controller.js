// wishlist_controller.js

const express = require("express");
const wishlist = express.Router();
const db = require("../models");
const { WishlistItem } = db;

// Add item to wishlist
wishlist.post("/", async (req, res) => {
  try {
    const { productId, userId } = req.body;

    await WishlistItem.create({
      productId,
      userId,
    });

    res.status(200).json({ message: "Item added to wishlist successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = wishlist;
