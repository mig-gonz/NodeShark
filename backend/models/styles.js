const { sequelize } = require('../database');
const { DataTypes } = require('sequelize');
const Product = require('./products');

const Styles = sequelize.define(
  'styles',
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
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// sequelize.sync();

Styles.hasMany(Product, { foreignKey: 'styleId' });
Product.belongsTo(Styles, { foreignKey: 'styleId' });

module.exports = Styles;
