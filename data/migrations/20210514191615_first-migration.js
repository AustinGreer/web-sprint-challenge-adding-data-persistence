
exports.up = async function(knex) {
    await knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 30)
            .notNullable()
        tbl.string('project_description')
        tbl.integer('project_completed')
            .notNullable()
            .defaultTo(0)
    })

    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name')
            .notNullable()
            .unique()
        tbl.string('resource_description')
    })

    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description')
            .notNullable()
        tbl.string('task_notes')
        tbl.integer('task_completed')
            .defaultTo(0)
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
    })
};

exports.down = function(knex) {
    
};
