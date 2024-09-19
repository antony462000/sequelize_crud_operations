const userModel = require("../../models/User")
module.exports = async (data) => {

    // using promise
    // return new Promise((resolve,reject)=>{
    //     const user =userModel.findAll({
    //         attributes:["name","email",'mob']
    //     })
    //     resolve(user)
    //     reject("Error")
    // })


    // using sync await
    try {
        return await userModel.findAll({
            attributes: ["name"]
        })
    } catch (error) {
        throw new Error(error.message)
    }
}