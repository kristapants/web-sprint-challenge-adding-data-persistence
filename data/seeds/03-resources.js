
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Computer', description:''},
        {name: 'Office software license', description:''},
        {name: 'Boatload of money', description:''},
        {name: 'Facilities staff', description:''},
        {name: 'Projector', description:''},
        {name: 'Business cards', description:''},
        {name: 'Corprate credit card', description:''},
        {name: 'Snacks', description:''}
      ]);
    });
};
