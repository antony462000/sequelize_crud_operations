const userModel = require('../../models/User')
module.exports=async (data)=>{
    try {
    return await userModel.create({
        name:data.name,
        password:data.password,
        email:data.email,
        mob:data.mob
    })
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
}