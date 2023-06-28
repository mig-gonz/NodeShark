const { sequelize } = require('../database');
const { DataTypes } = require('sequelize');
const Product = require('./products');

const Brand = sequelize.define(
  'brands',
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
  },
  {
    timestamps: false,
  }
);

// sequelize.sync();

Brand.hasMany(Product, { foreignKey: 'brandId' });
Product.belongsTo(Brand, { foreignKey: 'brandId' });

module.exports = Brand;
