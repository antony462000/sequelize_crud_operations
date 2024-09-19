
const createUserS = require('../services/createUserS')
const responder = require("../shared/responder")
module.exports = async (req, res) => {
     const Responder= new responder(res)
    try {
        console.log(req)
        var user = await createUserS(req.body)
        Responder.success({
            message:"Successfully Created",
            payload:user})
    } catch (error) {
       Responder.fail(error.message ?? "Internal server error")
    }

}