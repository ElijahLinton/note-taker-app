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

module.exports = router