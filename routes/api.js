const fs = require("fs")
const uuid = require('uuid')
const router = require('express').Router();
const db = require('../db/db.json')

router.get('/notes',(req,res) =>{
 const dataBase = fs.readFileSync(db)
 res.json(JSON.parse(dataBase))
})

router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync(db));
    const dataBody = req.body
    dataBody.id = uuid.v4();
    notes.push(dataBody)
    fs.writeFileSync(db, JSON.stringify(note));
    res.json(notes)
});

module.exports = router;