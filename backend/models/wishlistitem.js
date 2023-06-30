'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WishlistItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // wishlist items belong to many users and is referencing user id on the users table
      WishlistItem.belongsTo(models.User, { foreignKey: 'userId' });
      // wishlist items belong to many skus and is referencing sku id on the skus table
      WishlistItem.belongsTo(models.Sku, { foreignKey: 'skuId' });
    }
  }
  WishlistItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      skuId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'WishlistItem',
      tableName: 'wishlist_items',
      timestamps: false,
    }
  );
  return WishlistItem;
};
