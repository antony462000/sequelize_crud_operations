const userModel = require('../../models/User')
module.exports=async(data)=>{
    await userModel.destroy({where:{id:data.id}})
    return "User Deleted"
}