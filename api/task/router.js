const express = require('express')
const router = express.Router()
const Tasks = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const allTasks = await Tasks.getAll()
        res.json(allTasks)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router