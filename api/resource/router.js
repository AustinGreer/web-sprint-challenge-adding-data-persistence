const express = require('express')
const router = express.Router()
const Resources = require('./model')
const { validateResource, validateResourcePayload} = require('./middleware')

// get - returns an array of all resource objects
router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getAll()
        res.json(resources)
    } catch (err) {
        next(err)
    }
})

// get - returns a specific resource object by the specified id
router.get('/:id', validateResource, async (req, res, next) => {
    try {
        res.json(req.resource)
    } catch (err) {
        next(err)
    }
})

// post - returns a newly created resource object
router.post('/', validateResourcePayload, async(req, res, next) => {
    try {
        const newResource = await Resources.create(req.body)
        res.status(201).json(newResource)
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
