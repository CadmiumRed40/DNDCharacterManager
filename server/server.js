const express = require('express') //importing express
const app = express() //creating app

app.get("/api", (req, res) => {
    res.json({ "users" : ["userOne","userTwo","userThree"]})
});


//assigning port
const PORT = process.env.PORT || 8080;

app.listen(8080, () => console.log(`Server started on port ${PORT}`));