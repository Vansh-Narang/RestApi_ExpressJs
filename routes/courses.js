const { json } = require("body-parser")
const ex = require("express")
const { route } = require("express/lib/application")
const router = ex.Router()
const Course = require("../models/course")

//Get all the courses
router.get('/cour', async (req, res) => {
    try {
        const courses = await Course.find()
        res.json(courses);
    } catch (error) {
        res.json(error);
    }
})


//get single course
router.get('/:courseId', async (req, res) => {
    const courseId = req.params.courseId
    try {
        const c = await Course.findById(courseId)
        res.json(c);
    } catch (error) {
        res.json(error);
    }
})
//create course

//POST IS USED
router.post('/', async (req, res) => {
        const course = await Course.create(req.body)
        res.json(course)
})
//delete course



//update course

module.exports = router