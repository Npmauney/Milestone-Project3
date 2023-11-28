const router = require('express').Router()
const db = require("../models")

const { Task, User } = db

router.post('/', async (req, res) => {
    if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    const place = await Place.create(req.body)
    res.json(place)
})