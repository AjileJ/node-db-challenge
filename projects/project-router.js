const express = require('express');
const Pdb = require('./project-model');
const router = express.Router();

router.get('/', (req,res) => {
  Pdb.get()
  .then(projects => {
    res.status(200).json(projects)
  })
 .catch(err => {
   res.status(500).json({error: "could not get projects from database"})
 })
})

router.get('/:id', (req,res) => {
  const {id} = req.params;

  Pdb.getById(id)
  .then(project => {
    res.status(200).json(project)
  })
  .catch(err => {
    res.status(500).json({error: "could not find project by Id"})
  })
})

router.post('/', (req,res) => {
  if(!req.body.project_name){
    return res.status(404).json({error: "needs a project name "})
  }
  Pdb.add(projects)
  .then(projects => {
    res.status(201).json(projects)
  })
  .catch(err => {
    res.status(500).json({error: 'could not add to database'})
  })
})

router.get('/:id/tasks', (req,res) => {
  const {id} = req.params;
  Pdb.getTasks(id)
  .then(tasks => {
    if(!tasks[0]){
      res.status(404).json({error: "invalid project Id"})
    }else {
      res.status(200).json(tasks)
    }
  })
  .catch(err => {
    res.status(500).json({error: "error adding the task to the database"})
  })
})

router.post('/:id/tasks', (req,res) => {
  const {id} = req.params;
  const task = req.body;
  Pdb.getById(id)
  .then(project => {
    if(!project[0]){
      return res.status(404).json({error: "invalid id"})
    }
    if(!tasks.task_description) {
      return res.status(404).json({error: "needs a task description"})
    }
    Pdb.addTask(id, task)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(err => {
      res.status(500).json({error: "error putting task into the database"})
    })
  })
})


module.exports = router;
