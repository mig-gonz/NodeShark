// wishlist_controller.js

const express = require("express");
const wishlist = express.Router();
const db = require("../models");
const { WishlistItem } = db; // Update the model name to use correct casing

// Add item to wishlist
wishlist.post("/", async (req, res) => {
  try {
    const { skuId, userId } = req.body;

    // Perform the necessary operations to add the item to the wishlist in your database
    // Replace this code with your actual implementation
    await WishlistItem.create({
      skuId,
      userId,
    });

    res.status(200).json({ message: "Item added to wishlist successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = wishlist;
