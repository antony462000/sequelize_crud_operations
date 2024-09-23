
const createUserS = require('../services/createUserS')
const responder = require("../shared/responder")
module.exports = async (req, res) => {
     const Responder= new responder(res)
    try {
        var user = await createUserS(req.body)
        return Responder.success({
            message:"Successfully Created",
            payload:user})
    } catch (error) {
         return Responder.fail(error.message ?? "Internal server error")
    }

}