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
      // products have many skus this is referenced as productId on the skus table and is a foreign key to the product id on the products table
      Sku.belongsTo(models.Product, { foreignKey: 'productId' });
      // skus have many wishlist items this is referenced as skuId on the wishlist_items table and is a foreign key to the sku id on the skus table
      Sku.hasMany(models.wishlistItem, { foreignKey: 'skuId' });
    }
  }
  Sku.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      style: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
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
