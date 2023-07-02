"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("images", [
      { url: "", productId: 1 },
      { url: "", productId: 1 },
      { url: "", productId: 2 },
      { url: "", productId: 2 },
      { url: "", productId: 3 },
      { url: "", productId: 3 },
      { url: "", productId: 4 },
      { url: "", productId: 4 },
      { url: "", productId: 5 },
      { url: "", productId: 5 },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("images", null, {});
  },
};
