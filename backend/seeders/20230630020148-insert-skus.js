"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("skus", [
      {
        color: "Navy",
        size: "S",
        style: "Slim Fit",
        productId: "21",
      },
      {
        color: "Black",
        size: "M",
        style: "Slim Fit",
        productId: "21",
      },
      {
        color: "Brown",
        size: "L",
        style: "Oversized",
        productId: "21",
      },
      {
        color: "Blue",
        size: "XL",
        style: "Oversized",
        productId: "21",
      },
      {
        color: "Black",
        size: "XXL",
        style: "Oversized",
        productId: "21",
      },
      {
        color: "Mist Green",
        size: "3XL",
        style: "Oversized",
        productId: "21",
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
