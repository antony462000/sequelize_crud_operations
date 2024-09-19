const deleteS = require("../services/deleteS")
const responder= require("../shared/responder")
module.exports = async(req,res) =>{
    const Responder = new responder(res)
    try {
        var deleteUser = await deleteS(req.body)
        Responder.success(
            {message:"Succefully Deleted",
            payload:deleteUser})
    } catch (error) {
        Responder.fail(error);
    }
}