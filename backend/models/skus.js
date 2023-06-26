const { sequelize } = require('../database');
const { DataTypes } = require('sequelize');
const Product = require('../models/products');

const Sku = sequelize.define(
  'skus',
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
        model: 'products',
        key: 'id',
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// sequelize.sync();

Product.hasMany(Sku, { foreignKey: 'productId' });
Sku.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Sku;
