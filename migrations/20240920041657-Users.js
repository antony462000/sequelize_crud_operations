'use strict';
const { DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("users",{
      id:{
          type:DataTypes.UUID,
          defaultValue:DataTypes.UUIDV4,
          primaryKey:true,
      },
      name:{
          type:DataTypes.STRING,
          allowNull: false,
      },
      password:{
          type:DataTypes.STRING,
      },
      email:{
          type:DataTypes.STRING,
      },
      mob:{
          type:DataTypes.STRING,
      },
      deletedAt:{
        type:DataTypes.DATE
    },
  })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("users")
  }
};
