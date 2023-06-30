"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("skus", [
      {
        color: "Navy",
        size: "S, M, L, XL, XXL, 3XL",
        style: "Slim Fit",
        productId: "1",
      },
      {
        color: "Black",
        size: "S, M, L, XL, XXL, 3XL",
        style: "Slim Fit",
        productId: "1",
      },
      {
        color: "Brown",
        size: "S, M, L, XL, XXL, 3XL",
        style: "Oversized",
        productId: "2",
      },
      {
        color: "Blue",
        size: "S, M, L, XL, XXL, 3XL",
        style: "Oversized",
        productId: "2",
      },
      {
        color: "Black",
        size: "S, M, L, XL, XXL, 3XL",
        style: "Oversized",
        productId: "3",
      },
      {
        color: "Mist Green",
        size: "S, M, L, XL, XXL, 3XL",
        style: "Oversized",
        productId: "3",
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
