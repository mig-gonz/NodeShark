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
      WishlistItem.belongsTo(models.User, { foreignKey: 'userId' });
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
