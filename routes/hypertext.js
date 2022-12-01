
const path = require('path')
const router = require('express').Router();


router.get('/notes', (req,res) => {
  res.sendFile (path.join(__dirname, '/public/notes.html'))
})

router.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
    readfromFile('./db/noteData.json').then((data) =>
    res.json(JSON.parse(data))
    );
})


module.exports = router
