
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {
      task_description: 'Play games1',
      task_notes: 'focus on movement',
      completed: 0,
      project_id: 1
    },
    {
      task_description: 'Play games1',
      task_notes: 'focus on movement',
      completed: 0,
      project_id: 1
    },
    {
      task_description: 'Play games2',
      task_notes: 'focus on movement',
      completed: 0,
      project_id: 2
    },
    {
      task_description: 'Play games2',
      task_notes: 'focus on movement',
      completed: 0,
      project_id: 2
    },
    {
      task_description: 'Play games3',
      task_notes: 'focus on movement',
      completed: 0,
      project_id: 3
    },
    {
      task_description: 'Play games3',
      task_notes: 'focus on movement',
      completed: 0,
      project_id: 3
    },
    {
      task_description: 'Play games3',
      task_notes: 'focus on movement',
      completed: 0,
      project_id: 3
    },
  ])
 
};
