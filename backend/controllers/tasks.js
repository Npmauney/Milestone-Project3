const router = require('express').Router()
const db = require("../models")

const { Task, User } = db

router.get('/', async (req, res) => {
    const tasks = await Task.findAll()
    res.json(tasks)
})

router.post('/', async (req, res) => {
   
    const task = await Task.create(req.body)
    res.json(task)
})

module.exports = router