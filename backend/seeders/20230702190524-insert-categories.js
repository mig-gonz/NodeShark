"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("category", [
			{ name: "Shirts" },
			{ name: "Shorts" },
			{ name: "Joggers & Sweats" },
			{ name: "Tanks & Stingers" },
			{ name: "Hoodies & Jackets" },
			{ name: "Leggings" },
			{ name: "Crop Tops" },
			{ name: "Sport Bras" },
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
