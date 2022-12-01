const express = require('express')
const app = express()
const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../db/fsUtils');

router.get('/notes',(req,res) =>{
  readFromFile('.db/noteData.json').then((data) => res.json(JSON.parse(data)))
  });
  
  router.post('/', (req , res) => {
    const { title, text } = req.body;
    switch (title, text) {
        case newData:
            const newNote = {
                title,
                text
            };
            readAndAppend(newNote, '.db/noteData.json' );
            const response = {
                status: 'added fine hip hip HORAYYY!!',
                body: newNote
            }
            res.json(response)
            break;
            default:
                res.json('UH OH!: cant add new note :(')
    }

  })

  module.exports = router