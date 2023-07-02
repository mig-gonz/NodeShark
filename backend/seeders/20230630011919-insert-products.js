"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: 'ARRIVAL 5" SHORTS',
        description:
          "Train freely and purposefully in the Arrival 5” Shorts. With a short 5-inch inseam alongside a lightweight, sweat-wicking material and supportive adjustable waistband, you can trust that these shorts will allow you to move in every direction with ease and confidence, rep after rep or step after step.",
        price: 23.99,
        brandId: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
