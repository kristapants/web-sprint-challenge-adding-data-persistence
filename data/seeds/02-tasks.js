
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'Impress Big Corp. head honcos', notes: '', completed: true},
        {project_id: 1, description: 'Steal the head honcos pets to force sale', notes: 'Last ditch effort', completed: false},
        {project_id: 2, description: 'Make a powerpoint', notes: '', completed: false},
        {project_id: 3, description: 'paint walls', notes: 'cereluan blue', completed: false},
        {project_id: 3, description: 'change carpet', notes: 'dark grey, plush af', completed: false},
        {project_id: 3, description: 'furniture upgrade', notes: 'either buy new or refinish', completed: false}
      ]);
    });
};
