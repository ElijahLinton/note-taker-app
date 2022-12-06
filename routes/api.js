const fs = require("fs");
const uuid = require("uuid");
const router = require("express").Router();
("")
router.get("/notes", (req, res) => {
    const data = fs.readFileSync("../");
    res.json(JSON.parse(data));
})

router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync(""));
    const addNote = req.body;
    addNote.id = uuid.v4();
    notes.push(addNote);
    fs.writeFileSync("../db/noteData.json", JSON.stringify(notes));
    res.json(notes);
})


module.exports = router;