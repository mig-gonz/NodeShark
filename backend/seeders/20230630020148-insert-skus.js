"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("skus", [
      {
        color: "",
        size: "S",
        style: "S",
        productId: "1",
      },
      {
        color: "",
        size: "M",
        style: "S",
        productId: "1",
      },
      {
        color: "",
        size: "L",
        style: "S",
        productId: "1",
      },
      {
        color: "",
        size: "XL",
        style: "S",
        productId: "1",
      },
      {
        color: "",
        size: "S",
        style: "S",
        productId: "2",
      },
      {
        color: "",
        size: "M",
        style: "S",
        productId: "2",
      },
      {
        color: "",
        size: "L",
        style: "S",
        productId: "2",
      },
      {
        color: "",
        size: "XL",
        style: "S",
        productId: "2",
      },
      {
        color: "",
        size: "S",
        style: "S",
        productId: "3",
      },
      {
        color: "",
        size: "M",
        style: "S",
        productId: "3",
      },
      {
        color: "",
        size: "L",
        style: "S",
        productId: "3",
      },
      {
        color: "",
        size: "XL",
        style: "S",
        productId: "3",
      },
      {
        color: "",
        size: "S",
        style: "S",
        productId: "4",
      },
      {
        color: "",
        size: "M",
        style: "S",
        productId: "4",
      },
      {
        color: "",
        size: "L",
        style: "S",
        productId: "4",
      },
      {
        color: "",
        size: "XL",
        style: "S",
        productId: "4",
      },
      {
        color: "",
        size: "S",
        style: "S",
        productId: "5",
      },
      {
        color: "",
        size: "M",
        style: "S",
        productId: "5",
      },
      {
        color: "",
        size: "L",
        style: "S",
        productId: "5",
      },
      {
        color: "",
        size: "XL",
        style: "S",
        productId: "5",
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
