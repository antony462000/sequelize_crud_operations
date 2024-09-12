const deleteS = require("../services/deleteS")

module.exports = async(req,res) =>{
    try {
        var deleteService = await deleteS(req.body)
        res.send(deleteService)
    } catch (error) {
        console.log("ERROR C")
        console.log(error)
    }
}