const { where } = require("sequelize")
const userModel = require('../../models/User')

module.exports=async(data)=>{
    await userModel.update({ name:data.Name ,email:data.email  },
       {where:{ id : data.uid}} 
    )
}