const { where } = require("sequelize")
const userModel = require('../../models/User')

module.exports=async(data)=>{
    try {
        const updated = await userModel.update({ name:data.Name ,email:data.email  },
            {where:{ id : data.uid}} 
         )
         return updated
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
    
}