'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
      },
      sku: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      brandId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      styleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      imageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint('products', {
      fields: ['brandId'],
      type: 'foreign key',
      name: 'brandId_fk',
      references: {
        table: 'brands',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addConstraint('products', {
      fields: ['styleId'],
      type: 'foreign key',
      name: 'styleId_fk',
      references: {
        table: 'styles',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addConstraint('products', {
      fields: ['imageId'],
      type: 'foreign key',
      name: 'imageId_fk',
      references: {
        table: 'images',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  },
};
