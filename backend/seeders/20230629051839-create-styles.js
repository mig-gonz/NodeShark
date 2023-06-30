'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('styles', [
      {
        name: 'Relaxed',
        gender: 'unisex',
      },
      {
        name: 'Oversized',
        gender: 'unisex',
      },
      {
        name: 'Athletic',
        gender: 'unisex',
      },
      {
        name: 'Slim Fit',
        gender: 'unisex',
      },
      {
        name: 'High-waisted fit',
        gender: 'female',
      },
      {
        name: 'Flush fit',
        gender: 'female',
      },
      {
        name: 'Boxy fit',
        gender: 'female',
      },
      {
        name: 'Light Support',
        gender: 'female',
      },
      {
        name: 'Medium Support',
        gender: 'female',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('styles', null, {});
  },
};
