"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("images", [
      {
        url: "https://alphaleteathletics.com/cdn/shop/products/CrestSSTeeSeaShell_Sangria1_2000x.jpg?v=1684597817",
        productId: 9,
      },
      {
        url: "https://alphaleteathletics.com/cdn/shop/files/WolfHeadMeshShortSage1_2000x.jpg?v=1682358198",
        productId: 10,
      },
      {
        url: "https://alphaleteathletics.com/cdn/shop/files/AcademyClubJoggerBlack2_2000x.jpg?v=1684571880",
        productId: 11,
      },
      {
        url: "https://alphaleteathletics.com/cdn/shop/products/WolfHeadMuscleTankBlack1_2000x.jpg?v=1684598142",
        productId: 12,
      },
      {
        url: "https://alphaleteathletics.com/cdn/shop/products/KingQuarterZipBlack5_2000x.jpg?v=1679351317",
        productId: 13,
      },
      {
        url: "https://alphaleteathletics.com/cdn/shop/products/AmplifyLeggingSangria9_2000x.jpg?v=1679348674",
        productId: 14,
      },
      {
        url: "https://alphaleteathletics.com/cdn/shop/products/RibbedSeamlessBraBlack6_2000x.jpg?v=1674867349",
        productId: 15,
      },
      {
        url: "https://alphaleteathletics.com/cdn/shop/products/SeamlessandSurface33_2000x.jpg?v=1658853529",
        productId: 16,
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("images", null, {});
  },
};
