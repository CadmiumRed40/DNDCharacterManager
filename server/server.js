const express = require('express') //importing express
const app = express() //creating app
const mongoose = require('mongoose') //importing mongoose module
const mongoDB = process.env.DB_CONNECTION_STRING

mongoose.set(strictQuery, false); //globally opting into filtering by properties that arent in the schema

mongoose.connect(DB_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})

app.get('/api/characters', (req, res) => {
    const characters = [
        {id: 1, firstName: 'Bleegus', lastName: 'Newland'},
        {id: 2, firstName: 'Fazo', lastName: 'Galbor'},
        {id: 3, firstName: 'Malat', lastName: 'Yargus'},
    ];

    res.json(characters);
});

app.get ('/api/characters', (req, res) => {
    console.log('Created a Character')
})

const PORT = 8080; //assigning port

app.listen(8080, () => console.log(`Server started on port ${PORT}`));