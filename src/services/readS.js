const userModel = require("../../models/User")
module.exports =  async (data) => {

    // using promise
// return new Promise((resolve,reject)=>{
//     const user =userModel.findAll({
//         attributes:["name","email",'mob']
//     })
//     resolve(user)
//     reject("Error")
// })


// using sync await
const user =await userModel.findAll({
    attributes:["name"]
})
return user


}