const express = require('express')
const router = express.Router()
const Resources = require('./model')


router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getAll()
        res.json(resources)
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
