const userModel = require('../../models/User')
module.exports=(data)=>{
    
    userModel.create({
        name:data.name,
        password:data.password,
        email:data.email,
        mob:data.mob
    })
}