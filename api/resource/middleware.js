const Resources = require('./model')

// checks if project exists
const validateResource = async (req, res, next) => {
    try {
        const { id } = req.params
        const resource = await Resources.getById(id)

        if (!resource) {
            next({status: 404, message: 'The resource you requested was not found'})
        } else {
            req.resource = resource
            next()
        }
    } catch (err) {
        next(err)
    }
}

// checks payload of a newly created project
const validateResourcePayload = async (req, res, next) => {
    try {
        const { resource_name } = req.body

        if (!resource_name) {
            next({status: 400, message: 'Project must include a name'})
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {validateResource, validateResourcePayload}