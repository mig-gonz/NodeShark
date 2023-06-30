'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'wishlist_items',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        skuId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );

    await queryInterface.addConstraint('wishlist_items', {
      fields: ['skuId'],
      type: 'foreign key',
      name: 'skuId_fk',
      references: {
        table: 'skus',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });

    await queryInterface.addConstraint('wishlist_items', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'userId_fk',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('wishlist_items');
  },
};
