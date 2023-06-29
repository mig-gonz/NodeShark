'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('brands', [
      {
        name: 'Gymshark',
      },
      {
        name: 'YoungLA',
      },
      {
        name: 'Alphalete',
      },
      {
        name: 'Barbell',
      },
      {
        name: 'Echt',
      },
      {
        name: 'Nike',
      },
      {
        name: 'Lululemon',
      },
      {
        name: 'Under Armour',
      },
      {
        name: 'Reebok',
      },
      {
        name: 'Adidas',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('brands', null, {});
  },
};
