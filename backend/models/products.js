const { sequelize } = require("../database");
const { DataTypes } = require("sequelize");

const Product = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    brandId: {
      type: DataTypes.INTEGER,
      references: {
        model: "brands",
        key: "id",
      },
    },
    imageId: {
      type: DataTypes.INTEGER,
      references: {
        model: "images",
        key: "id",
      },
    },
    styleId: {
      type: DataTypes.INTEGER,
      references: {
        model: "styles",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

// sequelize.sync();

module.exports = Product;
