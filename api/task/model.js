// build your `Task` model here
const db = require('../../data/dbConfig.js');

module.exports = {
  get
};

function get() {
  return db('tasks');
}
