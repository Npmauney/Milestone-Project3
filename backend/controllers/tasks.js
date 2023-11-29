const router = require('express').Router()
const db = require("../models")

const { Task, User } = db

router.get('/', async (req, res) => {
    const tasks = await Task.findAll()
    res.json(tasks)
})

module.exports = router