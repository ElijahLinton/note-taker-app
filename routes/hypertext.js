
const path = require('path')
const router = require('express').Router();
const db = require('../db/db.json')

router.get('/notes', (req,res) => {
  res.sendFile (path.join(__dirname, '../public/index.html'))
})

router.get('/notes', (req,res) => {
  res.sendFile (path.join(__dirname, '/public/notes.html'))
})

router.get('*', (req, res) =>{
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, '../public/index.html'))
});


module.exports = router
=======
    res.sendFile(path.join(__dirname, '/public/index.html'))
    readfromFile('./db/noteData.json').then((data) =>
    res.json(JSON.parse(data))
    );
})


module.exports = router
>>>>>>> parent of d446d28 (made index file connect to notes file)
