const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
}

// while this request was not specified in mvp, I am building it so I can utilize it in the create function
const getById = async (project_id) => {
    const uniqueProject = await db('projects')
        .where({project_id})
        .first()
    return uniqueProject
}

const create = async (project) => {
    const [id] = await db('projects').insert(project)

    return getById(id)
}

module.exports = {getAll, getById, create}
