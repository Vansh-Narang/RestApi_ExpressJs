const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch (error) {
        res.send(error)
    }
})
router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const a1 = await alien.save()
        res.json(al)
    }
    catch (err) {
        res.json(err)
    }
})

module.exports = router