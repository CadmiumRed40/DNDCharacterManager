const express = require('express')
const app = express()

app.get('/post', (req, res) => {
    res.redirect('/');
});


//assigning port
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));