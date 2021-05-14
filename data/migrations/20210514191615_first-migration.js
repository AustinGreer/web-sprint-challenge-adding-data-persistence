
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
};

exports.down = function(knex) {
    
};
