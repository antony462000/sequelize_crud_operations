const updateS = require("../services/updateS")
const responder = require("../shared/responder")
module.exports=async(req,res)=>{
    const Responder = new responder(res)
    try {
        var updateUser = await updateS(req.body)
        return Responder.success({
            message:"Successfully Updated ",
            payload:updateUser})
    } catch (error) {
        return Responder.fail(error.message)
    }
}