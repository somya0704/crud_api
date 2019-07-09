const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const port = 3000

const app = express();

app.use(bodyParser.json())

const server = 'ds341837.mlab.com:41837'
const database = 'learning'
const user = 'nitinkumar24'
const password = 'omg123omg123'


mongoose.connect("mongodb://test:test123@ds341837.mlab.com:41837/learning");


app.get('/', (req, res) => {
    res.json({"message": "Welcome  application"});
});


app.listen(port, () => {
   console.log(`server started on port no ${port}`)
});