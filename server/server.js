const dotenv = require('dotenv')
const express = require('express') //importing express
const app = express() //creating app
const mongoose = require('mongoose') //importing mongoose module
const Character = require('./models/Character')

const mongoURL = process.env.DB_CONNECTION_STRING //Setting mongoURL to the connection string contained in the .env file for safe keeping

//using mongoose.set to define if the values that are already defined in the database can be the only ones updated will not work as it generates an error
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
},() => {
	console.log('Connected to Database')
})


/*
app.get('/api/characters', (req, res) => {
    run()
    async function run() {
    const character = await Character.create({ firstName: 'Bleegus', lastName: 'Newland'})
    res.json(character);
    console.log('created character')
    }
});

app.get ('/api/characters', (req, res) => {
    console.log('Created a Character')
})
*/

const PORT = 8080; //assigning port

app.listen(8080, () => console.log(`Server started on port ${PORT}`));