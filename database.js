const Sequelize = require("sequelize")
const  sequelize= new Sequelize("expresscred", "postgres", "hinode", {
    host: "localhost",
    dialect: "postgres",
    logging:false
})


module.exports = { sequelize }
