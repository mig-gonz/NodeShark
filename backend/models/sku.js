'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sku.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  Sku.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      colors: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sizes: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Sku',
      tableName: 'skus',
      timestamps: false,
    }
  );
  return Sku;
};
