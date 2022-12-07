const express = require('express')


const noteapi =  require('./routes/api')
const hyperText = require('./routes/hypertext.js');



const app = express()

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));


app.use(express.json())




app.use(express.static('public'));
app.use('/api', noteapi);
app.use('/', hyperText);

app.listen(PORT, () =>{
    console.log(`App listening at http://localhost:${PORT} 🚀`)
})
