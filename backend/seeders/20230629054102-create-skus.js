'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('skus', [
      { color: 'Navy', size: 'S, M, L, XL, XXL, 3XL', productId: 1 },
      { color: 'Black', size: 'S, M, L, XL, XXL, 3XL', productId: 1 },
      //
      { color: 'Brown', size: 'S, M, L, XL, XXL, 3XL', productId: 2 },
      { color: 'Blue', size: 'S, M, L, XL, XXL, 3XL', productId: 2 },
      //
      { color: 'Black', size: 'S, M, L, XL, XXL, 3XL', productId: 3 },
      { color: 'Green', size: 'S, M, L, XL, XXL, 3XL', productId: 3 },
      //
      { color: 'Grey/Black', size: 'S, M, L, XL, XXL, 3XL', productId: 4 },
      { color: 'Blue', size: 'S, M, L, XL, XXL, 3XL', productId: 4 },
      //
      { color: 'Olive Grey', size: 'S, M, L, XL, XXL, 3XL', productId: 5 },
      { color: 'Khaki', size: 'S, M, L, XL, XXL, 3XL', productId: 5 },
      { color: 'Black', size: 'S, M, L, XL, XXL, 3XL', productId: 5 },
      { color: 'Chocolate', size: 'S, M, L, XL, XXL, 3XL', productId: 5 },
      //
      { color: 'Black', size: 'S, M, L, XL, XXL, 3XL', productId: 6 },
      { color: 'Off-White', size: 'S, M, L, XL, XXL, 3XL', productId: 6 },
      { color: 'Navy', size: 'S, M, L, XL, XXL, 3XL', productId: 6 },
      { color: 'Brown Washed', size: 'S, M, L, XL, XXL, 3XL', productId: 6 },
      //
      { color: 'Black Washed', size: 'S, M, L, XL, XXL, 3XL', productId: 7 },
      { color: 'Bone Washed', size: 'S, M, L, XL, XXL, 3XL', productId: 7 },
      { color: 'Brown Washed', size: 'S, M, L, XL, XXL, 3XL', productId: 7 },
      { color: 'Orange Washed', size: 'S, M, L, XL, XXL, 3XL', productId: 7 },
      //
      { color: 'Black', size: 'S, M, L, XL, XXL, 3XL', productId: 8 },
      { color: 'Camel', size: 'S, M, L, XL, XXL, 3XL', productId: 8 },
      { color: 'Grey', size: 'S, M, L, XL, XXL, 3XL', productId: 8 },
      { color: 'Olive', size: 'S, M, L, XL, XXL, 3XL', productId: 8 },
      //
      { color: 'Black', size: 'S, M, L, XL, XXL, 3XL', productId: 9 },
      { color: 'Sangria', size: 'S, M, L, XL, XXL, 3XL', productId: 9 },
      { color: 'White', size: 'S, M, L, XL, XXL, 3XL', productId: 9 },
      { color: 'Sea Shell', size: 'S, M, L, XL, XXL, 3XL', productId: 9 },
      //
      { color: 'Sangria', size: 'S, M, L, XL, XXL, 3XL', productId: 10 },
      { color: 'Evergreen', size: 'S, M, L, XL, XXL, 3XL', productId: 10 },
      { color: 'Sage', size: 'S, M, L, XL, XXL, 3XL', productId: 10 },
      { color: 'Black', size: 'S, M, L, XL, XXL, 3XL', productId: 10 },
      //
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
