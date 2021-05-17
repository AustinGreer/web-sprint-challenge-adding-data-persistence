const db = require('../../data/dbConfig')

const getAll = () => {
    return db('resources')
}

const getById = async (resource_id) => {
    const uniqueResource = await db('resources')
        .where({resource_id})
        .first()
    return uniqueResource
}

const create = async (resource) => {
    const [id] = await db('resources').insert(resource)

    return getById(id)
}

module.exports = {getAll, getById, create}