const express = require("express")
const app = express()
const port = 3000
const UserModel = require('./models/User')
const router =require('./src/router')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const initApp = async() =>{
    try {
        app.listen(port,() =>{
            console.log(`Example app listening at http://localhost:${port}/`)
        })

        UserModel.sync()
        console.log("Database successfully connected")
    } catch (error) {
        console.log(error)
        console.log("Unable to connect to the database :",error.original)
    }
}

app.get("/",(req,res)=>{
    res.send("Hello hei")   
})
app.use('/router',router)
initApp()

// post
// get
// patch
// put
// delete

// server.js one File
// 2 file 

