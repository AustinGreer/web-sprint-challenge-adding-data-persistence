const Projects = require('./model')

// checks if project exists
const validateProject = async (req, res, next) => {
    try {
        const { id } = req.params
        const project = await Projects.getById(id)

        if (!project) {
            next({status: 404, message: 'The Project you requested was not found'})
        } else {
            req.project = project
            next()
        }
    } catch (err) {
        next(err)
    }
}

// checks payload of a newly created project
const validateProjectPayload = async (req, res, next) => {
    try {
        const { project_name } = req.body

        if (!project_name) {
            next({status: 400, message: 'Project must include a name'})
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {validateProject, validateProjectPayload}