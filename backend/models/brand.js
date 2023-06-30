'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this means that the Brand model has a one-to-many relationship with the Product model, and is referenced as brandId on the Product model
      Brand.hasMany(models.Product, { foreignKey: 'brandId' });
    }
  }
  Brand.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Brand',
      tableName: 'brands',
      timestamps: false,
    }
  );
  return Brand;
};
