const updateS = require("../services/updateS")

module.exports=async(req,res)=>{
    try {
        var updateService = await updateS(req.body)
        res.send(updateService)
    } catch (error) {
        console.log("Error at C")
        console.log(error)
    }
}