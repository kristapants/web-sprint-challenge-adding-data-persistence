
exports.up = function(knex) {
  return knex.schema
        .createTable('projects', table => {
            table.increments('project_id')
            table.string('project_name').notNullable()
            table.string('project_description')
            table.boolean('project_completed')
        })

        .createTable('tasks',table => {
            table.increments('task_id')
            table.integer('project_id')
                .unsigned().notNullable()
                .references('project_id').inTable('projects')
            table.string('task_description').notNullable()
            table.string('task_notes')
            table.boolean('task_completed').notNullable()
        })

        .createTable('resources', table => {
            table.integer('resource_id')
            table.string('resource_name').unique().notNullable()
            table.string('resource_description') 
        })

        .createTable('project_resources', table => {
            table.integer('project_resource_id')
            table.integer('resource_id')
                .unsigned().notNullable()
                .references('resource_id').inTable('resources')
            table.integer('project_id')
                .unsigned().notNullable()
                .references('project_id').inTable('projects')
            table.float('quantity')
        }) 
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
