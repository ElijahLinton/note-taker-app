const express = require('express')


const noteapi =  require('./routes/api')
const noteHyper = require('.routes/hypertext.js');
const { appendFile } = require('fs');
const { use } = require('./routes/api');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));


app.use(express.json())




app.use(express.static('public'));
app.use('/api', noteapi);
app.use('/', hyperText);


app.listen(PORT, () => {
    console.log(`API server is ready on port http://localhost:${PORT} !`);
});