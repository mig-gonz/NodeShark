'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique: true,
        },
        passwordDigest: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );

    await queryInterface.addIndex('users', ['email'], {
      name: 'users_email_index',
      unique: true,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
