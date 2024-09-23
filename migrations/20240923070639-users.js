'use strict';

/** @type {import('sequelize-cli').Migration} */
const DataTypes = require('sequelize')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'createdAt', {
      type: DataTypes.DATE,
      allowNull: true,
    }),
    await queryInterface.addColumn('users', 'updatedAt', {
      type: DataTypes.DATE,
      allowNull: true,
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'createdAt', {
      type: DataTypes.DATE,
      allowNull: true,
    }),
    await queryInterface.addColumn('users', 'updatedAt', {
      type: DataTypes.DATE,
      allowNull: true,
    })
  }
};
