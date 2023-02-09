const express = require("express")
const courserouter = require("./routes/courses")
require("dotenv").config()
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const app = express()

app.use(bodyParser.json())
//middle ware is used to register
//use function is use to use (routes)
app.use("/api/v1/courses", courserouter)


mongoose.connect(process.env.DB_CONNECTION_URL, () => {
    console.log("COONECCETD")
})



app.listen(process.env.PORT, () => {
    console.log("start");
})