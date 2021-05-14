const express = require('express')
const router = express.Router()
const Projects = require('./model')

// get - returns an array of project objs
router.get('/', async (req, res, next) => {
    try {
        const allProjects = await Projects.getAll()
        res.json(allProjects)
    } catch (err) {
        next(err)
    }
})

// // post - returns an object of the newly created project
// router.post('/', (req, res, next) => {
    
// })

// error middleware
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router
