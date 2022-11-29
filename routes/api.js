const express = require('express')
const app = express()
const titleAndData = require('express').Router();
const {readAndAppend, readFromFile} = require('../helpers/fsUtils');

titleAndData.get('/api/notes',(req,res) =>{
  readFromFile('.db/noteData.json').then((data) => res.json(JSON.parse(data)))
  });
  
  titleAndData.post('/api/noteData', (req , res) => {
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

  module.exports = titleAndData