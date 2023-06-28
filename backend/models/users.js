const { sequelize } = require('../database');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    passwordDigest: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

sequelize.sync();

module.exports = User;