<<<<<<< HEAD
const fs = require("fs");
const  dirname  = require("path");
const uuid = require('uuid')
const router = require('express').Router();


router.get('/notes',(req,res) =>{
 const data = fs.readFileSync('../db/db.json')
 res.json(JSON.parse(data)); 
});
router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', {encoding:'utf16le'}));
    const dataBody = req.body
    dataBody.id = uuid.v4();
    notes.push(dataBody)
    fs.writeFileSync('../db/db.json', JSON.stringify(note));
    res.json(notes)
});
=======
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
>>>>>>> parent of d446d28 (made index file connect to notes file)

module.exports = router