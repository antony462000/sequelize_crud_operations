const responder =require('./../shared/responder')
const readUser  = require("../services/readS")

module.exports=async(req,res)=>{
    const Responder = new responder(res)
    try {
        var viewUser = await readUser(req.body)
        return Responder.success({
            message:"Fetched Successfully",
            payload:viewUser
        })
    } catch (error) {
        Responder.fail(error)
    }
}
