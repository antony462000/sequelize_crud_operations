'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id:"b00016c0-2701-4976-8a46-db0b613363c0",
          name:"ADMIN",
          password:"admin@1234",
          email:"admin@gmail.com",
          mob:"7896332014",
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete(
    "users",
    {
      id:"b00016c0-2701-4976-8a46-db0b613363c0",
      name:"ADMIN",
      password:"admin@1234",
      email:"admin@gmail.com",
      mob:"7896332014"
    },
  {}
   )
  }
};
