"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("skus", [
      {
        color: "White",
        size: "S",
        style: "Relaxed fit",
        productId: "1",
      },
      {
        color: "White",
        size: "M",
        style: "Relaxed fit",
        productId: "1",
      },
      {
        color: "White",
        size: "L",
        style: "Relaxed fit",
        productId: "1",
      },
      {
        color: "White",
        size: "XL",
        style: "Relaxed fit",
        productId: "1",
      },
      {
        color: "Black",
        size: "S",
        style: "Relaxed fit",
        productId: "1",
      },
      {
        color: "Black",
        size: "M",
        style: "Relaxed fit",
        productId: "1",
      },
      {
        color: "Black",
        size: "L",
        style: "Relaxed fit",
        productId: "1",
      },
      {
        color: "Black",
        size: "XL",
        style: "Relaxed fit",
        productId: "1",
      },
      {
        color: "Sea Shell",
        size: "S",
        style: "Relaxed fit",
        productId: 2,
      },
      {
        color: "Sea Shell",
        size: "M",
        style: "Relaxed fit",
        productId: 2,
      },
      {
        color: "Sea Shell",
        size: "L",
        style: "Relaxed fit",
        productId: 2,
      },
      {
        color: "Sea Shell",
        size: "XL",
        style: "Relaxed fit",
        productId: 2,
      },
      {
        color: "Evergreen",
        size: "S",
        style: "Relaxed fit",
        productId: 2,
      },
      {
        color: "Evergreen",
        size: "M",
        style: "Relaxed fit",
        productId: 2,
      },
      {
        color: "Evergreen",
        size: "L",
        style: "Relaxed fit",
        productId: 2,
      },
      {
        color: "Evergreen",
        size: "XL",
        style: "Relaxed fit",
        productId: 2,
      },
      {
        color: "Heather Grey",
        size: "S",
        style: "Relaxed fit",
        productId: 3,
      },
      {
        color: "Heather Grey",
        size: "M",
        style: "Relaxed fit",
        productId: 3,
      },
      {
        color: "Heather Grey",
        size: "L",
        style: "Relaxed fit",
        productId: 3,
      },
      {
        color: "Heather Grey",
        size: "XL",
        style: "Relaxed fit",
        productId: 3,
      },
      {
        color: "Smoke",
        size: "S",
        style: "Relaxed fit",
        productId: 3,
      },
      {
        color: "Smoke",
        size: "M",
        style: "Relaxed fit",
        productId: 3,
      },
      {
        color: "Smoke",
        size: "L",
        style: "Relaxed fit",
        productId: 3,
      },
      {
        color: "Smoke",
        size: "XL",
        style: "Relaxed fit",
        productId: 3,
      },
      {
        color: "White",
        size: "S",
        style: "Relaxed fit",
        productId: 4,
      },
      {
        color: "White",
        size: "M",
        style: "Relaxed fit",
        productId: 4,
      },
      {
        color: "White",
        size: "L",
        style: "Relaxed fit",
        productId: 4,
      },
      {
        color: "White",
        size: "XL",
        style: "Relaxed fit",
        productId: 4,
      },
      {
        color: "Sangria",
        size: "S",
        style: "Relaxed fit",
        productId: 4,
      },
      {
        color: "Sangria",
        size: "M",
        style: "Relaxed fit",
        productId: 4,
      },
      {
        color: "Sangria",
        size: "L",
        style: "Relaxed fit",
        productId: 4,
      },
      {
        color: "Sangria",
        size: "XL",
        style: "Relaxed fit",
        productId: 4,
      },
      {
        color: "Vanilla",
        size: "S",
        style: "Regular fit",
        productId: 5,
      },
      {
        color: "Vanilla",
        size: "M",
        style: "Regular fit",
        productId: 5,
      },
      {
        color: "Vanilla",
        size: "L",
        style: "Regular fit",
        productId: 5,
      },
      {
        color: "Vanilla",
        size: "XL",
        style: "Regular fit",
        productId: 5,
      },
      {
        color: "Evergreen",
        size: "S",
        style: "Regular fit",
        productId: 5,
      },
      {
        color: "Evergreen",
        size: "M",
        style: "Regular fit",
        productId: 5,
      },
      {
        color: "Evergreen",
        size: "L",
        style: "Regular fit",
        productId: 5,
      },
      {
        color: "Evergreen",
        size: "XL",
        style: "Regular fit",
        productId: 5,
      },
      {
        color: "Cotton Candy",
        size: "S",
        style: "High-waisted",
        productId: 6,
      },
      {
        color: "Cotton Candy",
        size: "M",
        style: "High-waisted",
        productId: 6,
      },
      {
        color: "Cotton Candy",
        size: "L",
        style: "High-waisted",
        productId: 6,
      },
      {
        color: "Cotton Candy",
        size: "XL",
        style: "High-waisted",
        productId: 6,
      },
      {
        color: "Black",
        size: "S",
        style: "High-waisted",
        productId: 6,
      },
      {
        color: "Black",
        size: "M",
        style: "High-waisted",
        productId: 6,
      },
      {
        color: "Black",
        size: "L",
        style: "High-waisted",
        productId: 6,
      },
      {
        color: "Black",
        size: "XL",
        style: "High-waisted",
        productId: 6,
      },

      {
        color: "Linen",
        size: "S",
        style: "High-waisted",
        productId: 7,
      },
      {
        color: "Linen",
        size: "M",
        style: "High-waisted",
        productId: 7,
      },
      {
        color: "Linen",
        size: "L",
        style: "High-waisted",
        productId: 7,
      },
      {
        color: "Linen",
        size: "XL",
        style: "High-waisted",
        productId: 7,
      },
      {
        color: "Oyster Grey",
        size: "S",
        style: "High-waisted",
        productId: 7,
      },
      {
        color: "Oyster Grey",
        size: "M",
        style: "High-waisted",
        productId: 7,
      },
      {
        color: "Oyster Grey",
        size: "L",
        style: "High-waisted",
        productId: 7,
      },
      {
        color: "Oyster Grey",
        size: "XL",
        style: "High-waisted",
        productId: 7,
      },

      {
        color: "Electric Purple",
        size: "S",
        style: "High-waisted",
        productId: 8,
      },
      {
        color: "Electric Purple",
        size: "M",
        style: "High-waisted",
        productId: 8,
      },
      {
        color: "Electric Purple",
        size: "L",
        style: "High-waisted",
        productId: 8,
      },
      {
        color: "Electric Purple",
        size: "XL",
        style: "High-waisted",
        productId: 8,
      },
      {
        color: "Emerald Green",
        size: "S",
        style: "High-waisted",
        productId: 8,
      },
      {
        color: "Emerald Green",
        size: "M",
        style: "High-waisted",
        productId: 8,
      },
      {
        color: "Emerald Green",
        size: "L",
        style: "High-waisted",
        productId: 8,
      },
      {
        color: "Emerald Green",
        size: "XL",
        style: "High-waisted",
        productId: 8,
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
