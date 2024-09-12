const express = require("express")
const app = express()
const port = 3000
const BookModel = require('./models/User')
const router =require('./src/router')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const initApp = async() =>{
    try {
        app.listen(port,() =>{
            console.log(`Example app listening at http://localhost:${port}/`)
        })

        BookModel.sync()
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
