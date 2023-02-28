const dotenv = require('dotenv')
const express = require('express') //importing express
const cors = require('cors')
const app = express() //creating app
const mongoose = require('mongoose') //importing mongoose module
const Character = require('./models/Character')

const mongoURL = process.env.DB_CONNECTION_STRING //Setting mongoURL to the connection string contained in the .env file for safe keeping

app.use(cors())//instatiating app object on the creation of the express server.

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
},() => {
	console.log('Connected to Database')
});

app.use('/login', (req, res) => { //app.use to either make a get or post request as express handles it all the same. 
    res.send({                    //production ready applications need to be more specific when fetching a token and submitting the login form.
        user: user.userName,
        password: user.password          //sending test token to localhost:8080/login
    });
});



const PORT = 8080; //assigning port

app.listen(8080, () => console.log(`Server started on port ${PORT}`));