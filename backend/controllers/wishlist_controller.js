const express = require("express");
const wishlist = express.Router();
const db = require("../models");
const { WishlistItem, Product, Image } = db;

// Add item to wishlist
wishlist.post("/", async (req, res) => {
  try {
    const { productId, url, userId } = req.body;

    console.log("Received POST request for adding an item to the wishlist");

    const wishlistItem = await WishlistItem.create({
      productId,
      url,
      userId,
    });

    console.log("Item added to wishlist:", wishlistItem); // Log the created item

    res.status(200).json({ message: "Item added to wishlist successfully" });
  } catch (error) {
    console.error("Error adding item to wishlist:", error); // Log the error
    res.status(500).json({ message: error.message });
  }
});

// Get wishlist items
wishlist.get("/", async (req, res) => {
  try {
    const { userId } = req.query;

    const items = await WishlistItem.findAll({
      where: { userId },
      include: [
        {
          model: Product,
          include: [Image],
        },
      ],
    });

    console.log("Wishlist items:", items); // Check the items array

    res.status(200).json({ items });
  } catch (error) {
    console.error("Error fetching wishlist items:", error); // Log the error
    res.status(500).json({ message: error.message });
  }
});

module.exports = wishlist;
