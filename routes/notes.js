const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

notes.get('/', (req,res) => {
    console.info(`${req.method} request recieved for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req,res) => {
    console.info(`${req.method} request recieved to add a note`);
    console.log(req.body);

    const { title, text } = req.body;
    
    if(req.body) {
        const newNote = {
            title,
            text, 
            tip_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully!!`)
    } else {
        res.error(`Couldn't add note`);
    }
});

module.exports = notes; 