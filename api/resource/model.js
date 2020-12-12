// build your `Resource` model here
const db = require('../../data/dbConfig.js');

module.exports = {
  get,
  getById,
  post
};

function get() {
  return db('resources');
}

function getById(id) {
  return db('resources')
  .where('resources.id', id)
  .first()
}

function post(resource) {
  return db('resources')
    .insert(resource)
    .then(ids => {
      return getById(ids[0]);
    });
}


