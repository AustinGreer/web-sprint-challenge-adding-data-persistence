
exports.up = async function(knex) {
    await knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 30)
            .notNullable()
        tbl.string('project_description')
        tbl.boolean('project_completed')
            .notNullable()
            .defaultTo(0)
    })

    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name')
            .notNullable()
            .unique()
        tbl.string('resource_description')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })

    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.string('task_description')
            .notNullable()
        tbl.string('task_notes')
        tbl.boolean('task_completed')
            .defaultTo(0)
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })

    .createTable('resource_assignment', tbl => {
        tbl.increments('assignment_id')
        tbl.string('assignment_name', 30)
            .notNullable()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
    
};
