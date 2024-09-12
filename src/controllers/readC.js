const readUser  = require("../services/readS")
module.exports=async(req,res)=>{
    try {
        var myService = await readUser(req.body)
        res.send(myService)
    } catch (error) {
        console.log(error)
        res.send("Error")
    }
}