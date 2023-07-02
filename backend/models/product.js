"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Product.hasMany(models.Sku, { foreignKey: "productId" });
			Product.hasMany(models.Image, { foreignKey: "productId" });
			Product.belongsTo(models.Brand, { foreignKey: "brandId" });
			Product.belongsTo(models.Category, { foreignKey: "categoryId" });
		}
	}
	Product.init(
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
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			price: {
				type: DataTypes.DECIMAL(5, 2),
				allowNull: false,
			},
			gender: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			categoryId: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			brandId: {
				// fk for brand
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Product",
			tableName: "products",
			timestamps: false,
		}
	);
	return Product;
};
