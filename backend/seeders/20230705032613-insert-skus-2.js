"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("skus", [
			{
				color: "White",
				size: "S",
				style: "Oversized",
				productId: 9,
			},
			{
				color: "White",
				size: "M",
				style: "Oversized",
				productId: 9,
			},
			{
				color: "White",
				size: "L",
				style: "Oversized",
				productId: 9,
			},
			{
				color: "White",
				size: "XL",
				style: "Oversized",
				productId: 9,
			},
			{
				color: "Navy",
				size: "S",
				style: "Oversized",
				productId: 9,
			},
			{
				color: "Navy",
				size: "M",
				style: "Oversized",
				productId: 9,
			},
			{
				color: "Navy",
				size: "L",
				style: "Oversized",
				productId: 9,
			},
			{
				color: "Navy",
				size: "XL",
				style: "Oversized",
				productId: 9,
			},

			{
				color: "Onyx Grey",
				size: "S",
				style: "Slim Fit",
				productId: 10,
			},
			{
				color: "Onyx Grey",
				size: "M",
				style: "Slim Fit",
				productId: 10,
			},
			{
				color: "Onyx Grey",
				size: "L",
				style: "Slim Fit",
				productId: 10,
			},
			{
				color: "Onyx Grey",
				size: "XL",
				style: "Slim Fit",
				productId: 10,
			},
			{
				color: "Fluo Lime",
				size: "S",
				style: "Slim Fit",
				productId: 10,
			},
			{
				color: "Fluo Lime",
				size: "M",
				style: "Slim Fit",
				productId: 10,
			},
			{
				color: "Fluo Lime",
				size: "L",
				style: "Slim Fit",
				productId: 10,
			},
			{
				color: "Fluo Lime",
				size: "XL",
				style: "Slim Fit",
				productId: 10,
			},

			{
				color: "Dusty Taupe",
				size: "S",
				style: "Oversized",
				productId: 11,
			},
			{
				color: "Dusty Taupe",
				size: "M",
				style: "Oversized",
				productId: 11,
			},
			{
				color: "Dusty Taupe",
				size: "L",
				style: "Oversized",
				productId: 11,
			},
			{
				color: "Sage Green",
				size: "XL",
				style: "Oversized",
				productId: 11,
			},
			{
				color: "Sage Green",
				size: "S",
				style: "Oversized",
				productId: 11,
			},
			{
				color: "Sage Green",
				size: "M",
				style: "Oversized",
				productId: 11,
			},
			{
				color: "Sage Green",
				size: "L",
				style: "Oversized",
				productId: 11,
			},
			{
				color: "Sage Green",
				size: "XL",
				style: "Oversized",
				productId: 11,
			},

			{
				color: "Black",
				size: "S",
				style: "Slim fit",
				productId: 12,
			},
			{
				color: "Black",
				size: "M",
				style: "Slim fit",
				productId: 12,
			},
			{
				color: "Black",
				size: "L",
				style: "Slim fit",
				productId: 12,
			},
			{
				color: "Black",
				size: "XL",
				style: "Slim fit",
				productId: 12,
			},
			{
				color: "Silhouette Grey",
				size: "S",
				style: "Slim fit",
				productId: 12,
			},
			{
				color: "Silhouette Grey",
				size: "M",
				style: "Slim fit",
				productId: 12,
			},
			{
				color: "Silhouette Grey",
				size: "L",
				style: "Slim fit",
				productId: 12,
			},
			{
				color: "Silhouette Grey",
				size: "XL",
				style: "Slim fit",
				productId: 12,
			},

			{
				color: "Rose Brown",
				size: "S",
				style: "Oversized",
				productId: 13,
			},
			{
				color: "Rose Brown",
				size: "M",
				style: "Oversized",
				productId: 13,
			},
			{
				color: "Rose Brown",
				size: "L",
				style: "Oversized",
				productId: 13,
			},
			{
				color: "Rose Brown",
				size: "XL",
				style: "Oversized",
				productId: 13,
			},
			{
				color: "Black",
				size: "S",
				style: "Oversized",
				productId: 13,
			},
			{
				color: "Black",
				size: "M",
				style: "Oversized",
				productId: 13,
			},
			{
				color: "Black",
				size: "L",
				style: "Oversized",
				productId: 13,
			},
			{
				color: "Black",
				size: "XL",
				style: "Oversized",
				productId: 13,
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
