const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();

const { readFromFile, readAndAppend } = require('../db/fsUtils');

router.get('/notes',(req,res) =>{
  readFromFile('./db/noteData.json')
  .then((data) => res.json(JSON.parse(data)))
  });
  
  router.post('/', (req , res) => {
     console.log(req.body)
    
        const { title, text} = req.body;
    
    if(req.body) {
        const newNote ={
            title,
            text,
            id: uuidv4()
        };
        readAndAppend(newNote, './db/noteData.json')
        res.json('new note received')
    }else {
        res.errored('error somethings wrong!')
    }
 

  })

  module.exports = router