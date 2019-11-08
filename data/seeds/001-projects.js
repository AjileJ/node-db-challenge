
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
    {
      project_name: 'California',
      project_description: 'los Angelas CA, 93021',
      completed: 0
    },
    {
      project_name: 'Burbank',
      project_description: 'los Angelas CA, 93021',
      completed: 0
    },
    {
      project_name: 'The Valley',
      project_description: 'los Angelas CA, 93021',
      completed: 0
    },
    
  ]);
}
