const express = require('express');

const Rdb = require('./resource-model');

const router = express.Router();

router.get('/', (req,res) => {
  Rdb.get()
  .then(resources => {
    res.status(200).json(resources)
  })
  .catch(err => {
    res.status(500).json({error: "could not get resources from database"})
  });
});

router.get('/:id', (req,res) => {
  const {id} = req.params;

  Rdb.getById(id)
  .then(resource => {
    if(resource[0]){
      res.status(200).json(resource)
    }else {
      res.status(500).json({error: "could not find resource by id"})
    }
  })
})

router.post('/', (req,res) => {
  Rdb.add(req.body)
  .then(result => {
    res.status(201).json(result)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: 'could not add resource to the database'})
  })
})