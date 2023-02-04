const express = require('express') //importing express
const app = express() //creating app

app.get('/api/characters', (req, res) => {
    const characters = [
        {id: 1, firstName: 'Bleegus', lastName: 'Newland'},
        {id: 2, firstName: 'Fazo', lastName: 'Galbor'},
        {id: 3, firstName: 'Malat', lastName: 'Yargus'},
    ];

    res.json(characters);
});

const PORT = 8080; //assigning port

app.listen(8080, () => console.log(`Server started on port ${PORT}`));