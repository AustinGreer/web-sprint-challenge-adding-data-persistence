const express = require('express')
const router = express.Router()
const Projects = require('./model')
const {validateProject, validateProjectPayload} = require('./middleware')

// get - returns an array of project objs
router.get('/', async (req, res, next) => {
    try {
        const allProjects = await Projects.getAll()
        res.json(allProjects)
    } catch (err) {
        next(err)
    }
})

// get - returns project by id
router.get('/:id', validateProject, async (req, res, next) => {
    try {
        res.json(req.project)
    } catch (err) {
        next(err)
    }
})

// post - returns an object of the newly created project
router.post('/', validateProjectPayload, async (req, res, next) => {
    try {
        const newAProject = await Projects.create(req.body)

        res.status(201).json(newAProject)
    } catch (err) {
        next(err)
    }
})

// error middleware
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router
