const express = require("express");
const path = require("path");
const fs = require("fs");
const api = require('./routes/index.js');
const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);



app.get("/",(req,res)=>
    res.sendFile(path.join(__dirname,'/public/index.html'))
);

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html')))

app.listen( PORT,()=>
    console.log(`App listening on http://localhost:${PORT}`));

    