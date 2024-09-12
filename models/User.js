// const { DataTypes } = require('sequelize')
const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')
const User = sequelize.define(
    "User",
    {
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
    },
    {

        "Indexes":[{ unique: true, fields: ["id"] }],
    }
)


module.exports =   User