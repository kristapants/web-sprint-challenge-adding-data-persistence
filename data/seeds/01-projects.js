
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'The Big Merger', description: 'Merger with Big Corp.', completed: true},
        {name: 'Sales presentation', description: 'Impress them goodly', completed: false},
        {name: 'Remodel east wing', description: 'Those meeting rooms should look client ready', completed: false}
      ]);
    });
    
};
