
const path = require('path')
const router = require('express').Router();
const db = require('../db/db.json')

router.get('/notes', (req,res) => {
  res.sendFile (path.join(__dirname, '../public/index.html'))
})

router.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
    readfromFile(db).then((data) =>
    res.json(JSON.parse(data))
    );
})


module.exports = router