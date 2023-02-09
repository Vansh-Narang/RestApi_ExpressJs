//model to store data
//update read and delete
const mongoose = require("mongoose");


const Course = mongoose.Schema({
    title: String,
    content: String,
    videos: Number,
    active: Boolean
})
module.exports = mongoose.model("courses", Course)