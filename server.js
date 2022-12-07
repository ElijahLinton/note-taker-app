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

<<<<<<< HEAD

app.listen(PORT, () => {
    console.log(`API server is ready on port http://localhost:${PORT}`);
});
=======
app.listen(PORT, () =>{
    console.log(`App listening at ${PORT} 🚀`)
})
>>>>>>> parent of d446d28 (made index file connect to notes file)
