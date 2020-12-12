// build your `Task` model here
const db = require('../../data/dbConfig.js');

module.exports = {
  get,
  post
};

function get() {
  return db('tasks');
}

async function post(task) {
  const newId = await db('tasks').insert(task);
  return db('tasks').where('id', newId)
      .then(tasks => {
          return tasks.map(task =>  {
              return {...task,
                  completed: task.completed ===  1
              }
          })
      })
}