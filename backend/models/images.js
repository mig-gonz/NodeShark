const { sequelize } = require("../database");
const { DataTypes } = require("sequelize");
const Product = require("../models/products");

const Images = sequelize.define(
  "images",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: "products",
        key: "id",
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// sequelize.sync();

Product.hasMany(Images, { foreignKey: "productId" });
Images.belongsTo(Product, { foreignKey: "productId" });

module.exports = Images;
