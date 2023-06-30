'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('images', [
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalSlimWovenPantNavy.A2A1N-UBCY.B_ZH_ZH.jpg?v=1647041889',
        productId: 1,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalSlimWovenPantNavy.A2A1N-UBCY.C_ZH_ZH.jpg?v=1647041889',
        productId: 1,
      },{
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ARRIVALSLIMWOVENPANT-A1A1X-BBBB-M-AJ3-BLACK.C-Edit_AS_7573004f-df54-44ff-a21e-738893883b91.jpg?v=1644430209',
        productId: 1,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ARRIVALSLIMWOVENPANT-A1A1X-BBBB-M-AJ3-BLACK.B-Edit_AS_ede510ab-aee4-486b-8b33-7a8d9eb9fd31.jpg?v=1644430208',
        productId: 1,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerAopStringerEcruBrownA2A8Z-NBRP-0661.41.jpg?v=1678719742',
        productId: 2,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerAopStringerEcruBrown-A2A8Z-NBRP26_78102a97-47e0-4ab5-b8a4-d9d889971d09.jpg?v=1678719742',
        productId: 2,
      },{
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/PowerWashedStringerOzoneBlueA2A8Z-UBZ10176_bcc6e435-61e0-48d4-ad7b-232f235e5bdb.jpg?v=1685039520',
        productId: 2,
      }
      ,{
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/PowerAopStringerOzoneBlueA2A8Z-UBZ1.12.jpg?v=1685039520',
        productId: 2,
      }
      ,{
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/LegacySweatshirtBlackB4A7M-BBBB-1556.502.jpg?v=1685026603',
        productId: 3,
      }
      ,{
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/LegacySweatshirtBlackB4A7M-BBBB-1590.503.jpg?v=1685026603',
        productId: 3,
      }
      ,{
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/LegacySweatshirtMistGreenB4A7M-EB1S-0464.509.jpg?v=1685026599',
        productId: 3,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/LegacySweatshirtMistGreenB4A7M-EB1S-0477.510.jpg?v=1685026599',
        productId: 3,
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('images', null, {});
};