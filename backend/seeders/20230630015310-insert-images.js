"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("images", [
      {
        url: "https://cdn.shopify.com/s/files/1/0156/6146/products/ARRIVAL5SHORTSBLACKA2A1M-BBBB.2_640x.jpg?v=1682353106",
        productId: 21,
      },
      {
        url: "https://cdn.shopify.com/s/files/1/0156/6146/products/ARRIVAL5SHORTSBLACKA2A1M-BBBB_1920x.jpg?v=1682353106",
        productId: 21,
      },
      {
        url: "https://cdn.shopify.com/s/files/1/0156/6146/products/ARRIVAL5SHORTSBLACKA2A1M-BBBB.3_640x.jpg?v=1682353106",
        productId: 21,
      },
      {
        url: "https://cdn.shopify.com/s/files/1/0156/6146/products/ARRIVAL5SHORTSBLACKA2A1M-BBBB.4_640x.jpg?v=1682353106",
        productId: 21,
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("images", null, {});
  },
};
