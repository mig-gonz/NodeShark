const Product = require("../../models/products");
const Sku = require("../../models/skus");
const Brand = require("../../models/brands");
const Image = require("../../models/images");
const Style = require("../../models/styles");

async function getAllProducts(req, res) {
  try {
    const foundProducts = await Product.findAll({
      include: [
        {
          model: Sku,
          attributes: ["color", "size"],
        },
        {
          model: Brand,
          attributes: ["name"],
        },
        {
          model: Image,
          attributes: ["url"],
        },
        {
          model: Style,
          attributes: ["name", "gender"],
        },
      ],
      attributes: ["id", "name", "description", "price"],
    });

    res.status(200).json({
      "All found products!": foundProducts,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getProductById(req, res) {
  try {
    const { productId } = req.params;

    const foundProduct = await Product.findByPk(productId, {
      include: [
        {
          model: Sku,
          attributes: ["color", "size"],
        },
        {
          model: Brand,
          attributes: ["name"],
        },
        {
          model: Image,
          attributes: ["url"],
        },
        {
          model: Style,
          attributes: ["name", "gender"],
        },
      ],
      attributes: ["id", "name", "description", "price"],
    });

    res.status(200).json({
      "Found product": foundProduct,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getBrandProducts(req, res) {
  try {
    const { brandName } = req.params;

    const foundProducts = await Product.findAll({
      where: {},
      include: [
        {
          model: Sku,
          attributes: ["color", "size"],
        },
        {
          model: Brand,
          where: { name: brandName },
          attributes: ["name"],
        },
        {
          model: Image,
          attributes: ["url"],
        },
        {
          model: Style,
          attributes: ["name", "gender"],
        },
      ],
      attributes: ["id", "name", "description", "price"],
    });

    res.status(200).json({
      "Found your brand products": foundProducts,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createProduct(req, res) {
  try {
    const { name, description, price, brand, image, style, skus } = req.body;

    // Create a new brand
    const newBrand = await Brand.create({
      name: brand.name,
    });

    // Create a new style
    const newStyle = await Style.create({
      name: style.name,
      gender: style.gender,
    });

    // Create a new product
    const newProduct = await Product.create({
      name,
      description,
      price,
      brandId: newBrand.id,
      styleId: newStyle.id,
    });

    // Create a new image
    const newImage = await Image.create({
      url: image.url,
      productId: newProduct.id,
    });

    // Update the product with the image ID
    newProduct.imageId = newImage.id;
    await newProduct.save();

    if (skus && skus.length > 0) {
      const createdSkus = [];

      for (const sku of skus) {
        const { color, sizes } = sku;

        for (const size of sizes) {
          // Create a new sku
          const createdSku = await Sku.create({
            productId: newProduct.id,
            color,
            size,
          });

          createdSkus.push(createdSku);
        }
      }

      // adds the created skus to the new product object
      newProduct.sku = createdSkus;
    }

    res.status(200).json({
      "New product created!": newProduct,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createBrandProduct(req, res) {
  try {
    const { brandName } = req.params;
    const { name, description, price, image, style, skus } = req.body;

    // Find the brand by name
    const brand = await Brand.findOne({ where: { name: brandName } });

    if (!brand) {
      return res.status(404).json({ error: "Brand not found" });
    }

    // Create a new style
    const newStyle = await Style.create({
      name: style.name,
      gender: style.gender,
    });

    // Create a new product
    const newProduct = await Product.create({
      name,
      description,
      price,
      brandId: brand.id,
      styleId: newStyle.id,
    });

    // Create a new image
    const newImage = await Image.create({
      url: image.url,
      productId: newProduct.id,
    });

    // Update the product with the image ID
    newProduct.imageId = newImage.id;
    await newProduct.save();

    if (skus && skus.length > 0) {
      const createdSkus = [];

      for (const sku of skus) {
        const { color, sizes } = sku;

        for (const size of sizes) {
          // Create a new sku
          const createdSku = await Sku.create({
            productId: newProduct.id,
            color,
            size,
          });

          createdSkus.push(createdSku);
        }
      }

      // adds the created skus to the new product object
      newProduct.sku = createdSkus;
    }

    res.status(200).json({
      "New product created!": newProduct,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateProduct(req, res) {
  try {
    const { productId } = req.params;
    const { name, description, price } = req.body;

    const foundProduct = await Product.findByPk(productId);

    if (!foundProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    const updatedProduct = await foundProduct.update({
      name,
      description,
      price,
    });

    res.status(200).json({
      "Updated product": updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteProduct(req, res) {
  try {
    const { productId } = req.params;
    const foundProduct = await Product.findByPk(productId);

    await foundProduct.destroy();

    res.status(200).json({
      "Deleted product": foundProduct,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteDataBaseData(req, res) {
  await sequelize.query("ALTER SEQUENCE products_id_seq RESTART WITH 1");
  await sequelize.query("ALTER SEQUENCE styles_id_seq RESTART WITH 1");
  await sequelize.query("ALTER SEQUENCE brands_id_seq RESTART WITH 1");
  await sequelize.query("ALTER SEQUENCE images_id_seq RESTART WITH 1");
  await Product.destroy({ where: {} });
  await Style.destroy({ where: {} });
  await Brand.destroy({ where: {} });
  await Image.destroy({ where: {} });

  res.status(200).json({
    "Deleted all products": true,
  });
}

module.exports = {
  getAllProducts,
  getProductById,
  getBrandProducts,
  createProduct,
  createBrandProduct,
  updateProduct,
  deleteProduct,
  deleteDataBaseData,
};
