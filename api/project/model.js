// build your `Project` model here
const db = require('../../data/dbConfig.js');

module.exports = {
  get
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
