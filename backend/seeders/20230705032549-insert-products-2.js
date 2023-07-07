"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("products", [
			{
				name: "Essential Oversized Tee",
				description:
					"This essential collection takes it back to basics and does it well. Classic styles, versatile colours and simple designs mean no gym bag is complete without one of these pieces, whether you're training, commuting, or resting.",
				price: 26.0,
				gender: "male",
				categoryId: 1,
				brandId: 1,
			},
			{
				name: "Sport Shorts",
				description:
					"Sport is here to support you in the work you do when no one's watching, so you can focus on what matters most. Working for that reward.",
				price: 38.0,
				gender: "male",
				categoryId: 2,
				brandId: 1,
			},
			{
				name: "Rest Day Sweats",
				description:
					"Meet your key rest day pieces. With premium heavyweight fabrics, relaxed oversized fits, and laidback styles, the Rest Day collection is as easy to wear as your day is easygoing",
				price: 60.0,
				gender: "male",
				categoryId: 3,
				brandId: 1,
			},
			{
				name: "Bold Arm Drop Tank",
				description:
					"Loud and proud, Bold's ready for out-and-out lifting over and over again. It has a lightweight material for zero distractions. Textured print for a bold aesthetic.",
				price: 24.0,
				gender: "male",
				categoryId: 4,
				brandId: 1,
			},
			{
				name: "Power Washed Hoodie",
				description:
					"Power your pursuit of perfection in a range truly designed for you. Oversized fits created specifically for that distinct bodybuilder shape and durable fabrics to support you through even your most brutal workouts, day after day. A new washed fabric meets our signature bold Power branding, giving you a look that's just as comfortable in the gym as it is on the streets.",
				price: 62.0,
				gender: "male",
				categoryId: 5,
				brandId: 1,
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

// {
// 	name: "",
// 	description: "",
// 	price: 72.0,
// 	gender: "female",
// 	categoryId: 6,
// 	brandId: 1,
// },
// {
// 	name: "",
// 	description: "",
// 	price: 52.0,
// 	gender: "female",
// 	categoryId: 7,
// 	brandId: 1,
// },
// {
// 	name: "",
// 	description: "",
// 	price: 40.0,
// 	gender: "female",
// 	categoryId: 8,
// 	brandId: 1,
// },
