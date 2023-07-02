const express = require("express");
const products = express.Router();
const db = require("../models");
const { Product, Sku, Brand, Image, Category } = db;

// find all products
products.get("/", async (req, res) => {
	try {
		const findAllProducts = await Product.findAll({
			include: [
				{
					model: Brand,
					attributes: ["name"],
				},
				{
					model: Category,
					attributes: ["name"],
				},
				{
					model: Sku,
					attributes: ["color", "size", "style"],
				},
				{
					model: Image,
					attributes: ["url"],
				},
			],
		});

    res
      .status(200)
      .json({ message: "Found all products!", data: findAllProducts });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// find a product
products.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

		const findAProduct = await Product.findByPk(id, {
			attributes: [
				"name",
				"description",
				"price",
				"gender",
				"categoryId",
				"brandId",
			],
			include: [
				{
					model: Brand,
					attributes: ["name"],
				},
				{
					model: Category,
					attributes: ["name"],
				},
				{
					model: Sku,
					attributes: ["color", "size", "style"],
				},
				{
					model: Image,
					attributes: ["url"],
				},
			],
		});

		res
			.status(200)
			.json({ message: `Found a product with id: ${id}!`, data: findAProduct });
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
});

// find all product by a brandName
products.get("/brands/:brandName", async (req, res) => {
  try {
    const { brandName } = req.params;

		const findAllBrandNameProducts = await Product.findAll({
			attributes: [
				"name",
				"description",
				"price",
				"gender",
				"categoryId",
				"brandId",
			],
			include: [
				{
					model: Brand,
					where: { name: brandName },
				},
				{ model: Category },
				{
					model: Sku,
				},
				{
					model: Image,
				},
			],
		});

		res.status(200).json({
			message: `Found all products by ${brandName}!`,
			data: findAllBrandNameProducts,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
});

// find all product by a brandName and id
products.get("/brands/:brandName/:id", async (req, res) => {
  try {
    const { brandName, id } = req.params;

		const findProductsByBrand = await Product.findAll({
			attributes: [
				"name",
				"description",
				"price",
				"gender",
				"categoryId",
				"brandId",
			],
			include: [
				{
					model: Brand,
					where: { name: brandName },
				},
				{ model: Category },
				{
					model: Sku,
				},
				{
					model: Image,
				},
			],

      where: {
        id: id,
      },
    });

		res.status(200).json({
			message: `Found all products by ${brandName} and product id: ${id}!`,
			data: findProductsByBrand,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
});

module.exports = products;
