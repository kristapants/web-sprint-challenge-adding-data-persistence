// build your `Project` model here
const db = require('../../data/dbConfig.js');

module.exports = {
  get,
  getById,
  post
};

function get() {
  return db('projects')
      .then(projects => {
          return projects.map(project =>  {
              return {...project,
                  completed: project.completed ===  1 ? true : false
              }
          })
      })
}

function getById() {
  return db('projects')
    .where('resources.id', id)
    .first()
    .then(projects => {
      return projects.map(project => {
        return {
          ...project,
          completed: project.completed === 1 ? true : false
        }
      })
    })
}


async function post(project) {
  const newId = await db('projects').insert(project);
  return db('projects').where('id', newId)
  .then(projects => {
      return projects.map(project =>  {
          return {...project,
              completed: project.completed ===  1 ? true : false
          }
      })
  })
}