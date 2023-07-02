"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "",
        description: "",
        gender: "",
        categoryId: "",
        price: "",
        brandId: "",
      },
      {
        name: "",
        description: "",
        gender: "",
        categoryId: "",
        price: "",
        brandId: "",
      },
      {
        name: "",
        description: "",
        gender: "",
        categoryId: "",
        price: "",
        brandId: "",
      },
      {
        name: "",
        description: "",
        gender: "",
        categoryId: "",
        price: "",
        brandId: "",
      },
      {
        name: "",
        description: "",
        gender: "",
        categoryId: "",
        price: "",
        brandId: "",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
