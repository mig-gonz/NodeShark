"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "Brushed Crest Tee",
        description:
          "Designed for comfort and style, this tee features a crew neck and short sleeves. With Alphaletes logo embroidered on the chest",
        price: "40.00",
        gender: "male",
        categoryId: 1,
        brandId: 3,
      },
      {
        name: "Wolf Head Mesh Shorts",
        description:
          "Designed to elevate your comfort and style with our mesh shorts. These relaxed fit and premium details, these shorts are must haves.",
        price: 52.0,
        gender: "male",
        categoryId: 2,
        brandId: 3,
      },
      {
        name: "Academy Club Joggers",
        description:
          "The Club Joggers provide a perfect blend of softness and durability to keep you comfortable throughout your day.",
        price: 68.0,
        gender: "male",
        categoryId: 3,
        brandId: 3,
      },
      {
        name: "Bushed Wold Head Muscle Tank",
        description:
          "The new lightweight, ultra stretchy, all-purpose fabric is designed to make you look good and feel good. Giving you a new favorite go to tank!",
        price: 36.0,
        gender: "male",
        categoryId: 4,
        brandId: 3,
      },
      {
        name: "King Quarter Zip Sweater",
        description:
          "The textured fleece fabric envelops you in a soft, warm embrace, while the thoughtfully designed fit and neutral spring color palette cater to your every need!",
        price: 58.0,
        gender: "unisex",
        categoryId: 5,
        brandId: 3,
      },
      {
        name: "Amplify Leggings",
        description:
          "The full-interlock knit construction forms a more dense seamless fabric that maintains breathability, keeping you cool and comfortable all day long.",
        price: 72.0,
        gender: "female",
        categoryId: 6,
        brandId: 3,
      },
      {
        name: "Seamless Ribbed Sports Bra",
        description:
          "The full-interlock knit construction forms a more dense seamless fabric that maintains breathability, keeping you cool and comfortable all day long.",
        price: 52.0,
        gender: "female",
        categoryId: 7,
        brandId: 3,
      },
      {
        name: "Amplify SS Crop Top",
        description:
          "The full-interlock knit construction forms a more dense seamless fabric that maintains breathability, keeping you cool and comfortable all day long.",
        price: 40.0,
        gender: "female",
        categoryId: 8,
        brandId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
