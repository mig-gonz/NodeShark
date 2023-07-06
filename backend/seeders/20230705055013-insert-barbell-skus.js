"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("skus", [
			{
				color: "Black",
				size: "S",
				style: "Athletic fit",
				productId: 21,
			},
			{
				color: "Black",
				size: "M",
				style: "Athletic fit",
				productId: 21,
			},
			{
				color: "Black",
				size: "L",
				style: "Athletic fit",
				productId: 21,
			},
			{
				color: "Black",
				size: "XL",
				style: "Athletic fit",
				productId: 21,
			},
			{
				color: "Storm",
				size: "S",
				style: "Athletic fit",
				productId: 21,
			},
			{
				color: "Storm",
				size: "M",
				style: "Athletic fit",
				productId: 21,
			},
			{
				color: "Storm",
				size: "L",
				style: "Athletic fit",
				productId: 21,
			},
			{
				color: "Storm",
				size: "XL",
				style: "Athletic fit",
				productId: 21,
			},

			{
				color: "Blackout",
				size: "S",
				style: "Regular fit",
				productId: 22,
			},
			{
				color: "Blackout",
				size: "M",
				style: "Regular fit",
				productId: 22,
			},
			{
				color: "Blackout",
				size: "L",
				style: "Regular fit",
				productId: 22,
			},
			{
				color: "Blackout",
				size: "XL",
				style: "Regular fit",
				productId: 22,
			},
			{
				color: "Woodland",
				size: "S",
				style: "Regular fit",
				productId: 22,
			},
			{
				color: "Woodland",
				size: "M",
				style: "Regular fit",
				productId: 22,
			},
			{
				color: "Woodland",
				size: "L",
				style: "Regular fit",
				productId: 22,
			},
			{
				color: "Woodland",
				size: "XL",
				style: "Regular fit",
				productId: 22,
			},

			{
				color: "Slate",
				size: "S",
				style: "Regular fit",
				productId: 23,
			},
			{
				color: "Slate",
				size: "M",
				style: "Regular fit",
				productId: 23,
			},
			{
				color: "Slate",
				size: "L",
				style: "Regular fit",
				productId: 23,
			},
			{
				color: "Slate",
				size: "XL",
				style: "Regular fit",
				productId: 23,
			},
			{
				color: "Woodland",
				size: "S",
				style: "Regular fit",
				productId: 23,
			},
			{
				color: "Woodland",
				size: "M",
				style: "Regular fit",
				productId: 23,
			},
			{
				color: "Woodland",
				size: "L",
				style: "Regular fit",
				productId: 23,
			},
			{
				color: "Woodland",
				size: "XL",
				style: "Regular fit",
				productId: 23,
			},

			{
				color: "Black",
				size: "S",
				style: "Slim fit",
				productId: 24,
			},
			{
				color: "Black",
				size: "M",
				style: "Slim fit",
				productId: 24,
			},
			{
				color: "Black",
				size: "L",
				style: "Slim fit",
				productId: 24,
			},
			{
				color: "Black",
				size: "XL",
				style: "Slim fit",
				productId: 24,
			},
			{
				color: "Ember",
				size: "S",
				style: "Slim fit",
				productId: 24,
			},
			{
				color: "Ember",
				size: "M",
				style: "Slim fit",
				productId: 24,
			},
			{
				color: "Ember",
				size: "L",
				style: "Slim fit",
				productId: 24,
			},
			{
				color: "Ember",
				size: "XL",
				style: "Slim fit",
				productId: 24,
			},

			{
				color: "Charcoal",
				size: "S",
				style: "Slim fit",
				productId: 25,
			},
			{
				color: "Charcoal",
				size: "M",
				style: "Slim fit",
				productId: 25,
			},
			{
				color: "Charcoal",
				size: "L",
				style: "Slim fit",
				productId: 25,
			},
			{
				color: "Charcoal",
				size: "XL",
				style: "Slim fit",
				productId: 25,
			},
			{
				color: "Navy",
				size: "S",
				style: "Slim fit",
				productId: 25,
			},
			{
				color: "Navy",
				size: "M",
				style: "Slim fit",
				productId: 25,
			},
			{
				color: "Navy",
				size: "L",
				style: "Slim fit",
				productId: 25,
			},
			{
				color: "Navy",
				size: "XL",
				style: "Slim fit",
				productId: 25,
			},

			{
				color: "Black",
				size: "S",
				style: "Regular fit",
				productId: 26,
			},
			{
				color: "Black",
				size: "M",
				style: "Regular fit",
				productId: 26,
			},
			{
				color: "Black",
				size: "L",
				style: "Regular fit",
				productId: 26,
			},
			{
				color: "Black",
				size: "XL",
				style: "Regular fit",
				productId: 26,
			},
			{
				color: "Gray",
				size: "S",
				style: "Regular fit",
				productId: 26,
			},
			{
				color: "Gray",
				size: "M",
				style: "Regular fit",
				productId: 26,
			},
			{
				color: "Gray",
				size: "L",
				style: "Regular fit",
				productId: 26,
			},
			{
				color: "Gray",
				size: "XL",
				style: "Regular fit",
				productId: 26,
			},

			{
				color: "Meadow",
				size: "S",
				style: "High waisted",
				productId: 27,
			},
			{
				color: "Meadow",
				size: "M",
				style: "High waisted",
				productId: 27,
			},
			{
				color: "Meadow",
				size: "L",
				style: "High waisted",
				productId: 27,
			},
			{
				color: "Meadow",
				size: "XL",
				style: "High waisted",
				productId: 27,
			},
			{
				color: "Iris",
				size: "S",
				style: "High waisted",
				productId: 27,
			},
			{
				color: "Iris",
				size: "M",
				style: "High waisted",
				productId: 27,
			},
			{
				color: "Iris",
				size: "L",
				style: "High waisted",
				productId: 27,
			},
			{
				color: "Iris",
				size: "XL",
				style: "High waisted",
				productId: 27,
			},

			{
				color: "Cadet",
				size: "S",
				style: "High rise",
				productId: 28,
			},
			{
				color: "Cadet",
				size: "M",
				style: "High rise",
				productId: 28,
			},
			{
				color: "Cadet",
				size: "L",
				style: "High rise",
				productId: 28,
			},
			{
				color: "Cadet",
				size: "XL",
				style: "High rise",
				productId: 28,
			},
			{
				color: "Rifle",
				size: "S",
				style: "High rise",
				productId: 28,
			},
			{
				color: "Rifle",
				size: "M",
				style: "High rise",
				productId: 28,
			},
			{
				color: "Rifle",
				size: "L",
				style: "High rise",
				productId: 28,
			},
			{
				color: "Rifle",
				size: "XL",
				style: "High rise",
				productId: 28,
			},

			{
				color: "Black",
				size: "S",
				style: "Regular fit",
				productId: 29,
			},
			{
				color: "Black",
				size: "M",
				style: "Regular fit",
				productId: 29,
			},
			{
				color: "Black",
				size: "L",
				style: "Regular fit",
				productId: 29,
			},
			{
				color: "Black",
				size: "XL",
				style: "Regular fit",
				productId: 29,
			},
			{
				color: "Gray",
				size: "S",
				style: "Regular fit",
				productId: 29,
			},
			{
				color: "Gray",
				size: "M",
				style: "Regular fit",
				productId: 29,
			},
			{
				color: "Gray",
				size: "L",
				style: "Regular fit",
				productId: 29,
			},
			{
				color: "Gray",
				size: "XL",
				style: "Regular fit",
				productId: 29,
			},

			{
				color: "Static Gray",
				size: "S",
				style: "High waisted",
				productId: 30,
			},
			{
				color: "Static Gray",
				size: "M",
				style: "High waisted",
				productId: 30,
			},
			{
				color: "Static Gray",
				size: "L",
				style: "High waisted",
				productId: 30,
			},
			{
				color: "Static Gray",
				size: "XL",
				style: "High waisted",
				productId: 30,
			},
			{
				color: "Harmony Blue",
				size: "S",
				style: "High waisted",
				productId: 30,
			},
			{
				color: "Harmony Blue",
				size: "M",
				style: "High waisted",
				productId: 30,
			},
			{
				color: "Harmony Blue",
				size: "L",
				style: "High waisted",
				productId: 30,
			},
			{
				color: "Harmony Blue",
				size: "XL",
				style: "High waisted",
				productId: 30,
			},

			{
				color: "Heather Gray",
				size: "S",
				style: "Low Cut",
				productId: 31,
			},
			{
				color: "Heather Gray",
				size: "M",
				style: "Low Cut",
				productId: 31,
			},
			{
				color: "Heather Gray",
				size: "L",
				style: "Low Cut",
				productId: 31,
			},
			{
				color: "Heather Gray",
				size: "XL",
				style: "Low Cut",
				productId: 31,
			},
			{
				color: "Olive",
				size: "S",
				style: "Low Cut",
				productId: 31,
			},
			{
				color: "Olive",
				size: "M",
				style: "Low Cut",
				productId: 31,
			},
			{
				color: "Olive",
				size: "L",
				style: "Low Cut",
				productId: 31,
			},
			{
				color: "Olive",
				size: "XL",
				style: "Low Cut",
				productId: 31,
			},

			{
				color: "Maroon",
				size: "S",
				style: "Mid rise",
				productId: 32,
			},
			{
				color: "Maroon",
				size: "M",
				style: "Mid rise",
				productId: 32,
			},
			{
				color: "Maroon",
				size: "L",
				style: "Mid rise",
				productId: 32,
			},
			{
				color: "Maroon",
				size: "XL",
				style: "Mid rise",
				productId: 32,
			},
			{
				color: "Jewel Blue",
				size: "S",
				style: "Mid rise",
				productId: 32,
			},
			{
				color: "Jewel Blue",
				size: "M",
				style: "Mid rise",
				productId: 32,
			},
			{
				color: "Jewel Blue",
				size: "L",
				style: "Mid rise",
				productId: 32,
			},
			{
				color: "Jewel Blue",
				size: "XL",
				style: "Mid rise",
				productId: 32,
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
