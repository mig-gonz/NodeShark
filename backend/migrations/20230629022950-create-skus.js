'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'skus',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        color: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        size: {
          type: Sequelize.ENUM('XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'),
          allowNull: false,
        },
        productId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );

    await queryInterface.addConstraint('skus', {
      fields: ['productId'],
      type: 'foreign key',
      name: 'productId_fk',
      references: {
        table: 'products',
        field: 'id',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('skus', 'productId_fk');
    await queryInterface.dropTable('skus');
  },
};
