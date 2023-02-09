// const express = require("express")
// const courserouter = require("./routes/courses")
// require("dotenv").config()
const bodyParser = require('body-parser')
// const mongoose = require("mongoose")
// const app = express()

// app.use(bodyParser.json())
// //middle ware is used to register
// //use function is use to use (routes)
// app.use("/api/v1/courses", courserouter)


// mongoose.connect(process.env.DB_CONNECTION_URL, () => {
//     console.log("COONECCETD")
// })



// app.listen(process.env.PORT, () => {
//     console.log("start");
// })

const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/AlienDBex'

const app = express()
mongoose.set('strictQuery', false);
app.use(bodyParser.json())
// mongoose.connect(url, { useNewUrlParser: true })
mongoose.connect('mongodb://127.0.0.1:27017/myapp');
const con = mongoose.connection

con.on('open', function () {
    console.log("Connected");
})
const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)
app.listen(3000, () => {
    console.log("Server Started")
})