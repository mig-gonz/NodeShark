"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("products", [
			{
				name: "Dead Lift Midi Tee",
				description: "Show everyone you're killing it in the Deadlift T-Shirt.",
				price: 32.0,
				gender: "female",
				categoryId: 1,
				brandId: 1,
			},
			{
				name: "GS Power Original Tight Shorts",
				description:
					"Power your pursuit of perfection in a range that is truly made for lifting. Hit big numbers with 0 distraction designs, pre- and post- workout cover ups and supportive fits.",
				price: 46.0,
				gender: "female",
				categoryId: 2,
				brandId: 1,
			},
			{
				name: "Rest Day Sweats",
				description:
					"Rest up in Rest Day Sweats. This versatile collection is designed with our thickest, heaviest fabric yet so you can feel the difference when you wear it. The clean aesthetic makes it the next staple look in your wardrobe. Wear your Rest Day Sweats to and from the gym, to warm up, or just about anywhere on your next rest day.Rest up in Rest Day Sweats. This versatile collection is designed with our thickest, heaviest fabric yet so you can feel the difference when you wear it. The clean aesthetic makes it the next staple look in your wardrobe. Wear your Rest Day Sweats to and from the gym, to warm up, or just about anywhere on your next rest day.",
				price: 56.0,
				gender: "female",
				categoryId: 3,
				brandId: 1,
			},
			{
				name: "Rest Day Sweats Hoodie",
				description:
					"Rest up in Rest Day Sweats. This versatile collection is designed with our thickest, heaviest fabric yet so you can feel the difference when you wear it. The clean aesthetic makes it the next staple look in your wardrobe. Wear your Rest Day Sweats to and from the gym, to warm up, or just about anywhere on your next rest day.",
				price: 60.0,
				gender: "female",
				categoryId: 5,
				brandId: 1,
			},
			{
				name: "Sweat Seamless Leggings",
				description:
					"Your sweat speaks for itself, so now it's time to embrace it. Sleek, soft and comfortable fabrics meet powerful and resilient designs in the new SWEAT collection. This fabric  heightens breathability whilst still providing maximum durability, so you can stay cool during the sweatiest sessions, and rely on SWEAT to endure your workouts time and time again. In the collection that you'll feel hyped to wear for your next workout, all that's left to do is sweat.",
				price: 39.0,
				gender: "female",
				categoryId: 6,
				brandId: 1,
			},
			{
				name: "Cotton Boxy Crop Top",
				description:
					"Time to meet your most versatile pieces. Made for movement, rest and every day in between, experience the soft fabrics and stylish, easy-wear designs of these staple pieces that every wardrobe should own.",
				price: 30.0,
				gender: "female",
				categoryId: 7,
				brandId: 1,
			},
			{
				name: "Sweat Seamless Longline Sports Bra",
				description:
					"Your sweat speaks for itself, so now it's time to embrace it. Sleek, soft and comfortable fabrics meet powerful and resilient designs in the new SWEAT collection. This fabric  heightens breathability whilst still providing maximum durability, so you can stay cool during the sweatiest sessions, and rely on SWEAT to endure your workouts time and time again. In the collection that you'll feel hyped to wear for your next workout, all that's left to do is sweat.",
				price: 48.0,
				gender: "female",
				categoryId: 8,
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
