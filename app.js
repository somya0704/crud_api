const express = require('express');

const bodyParser = require('body-parser');

const moongose = require('mongoose');

const port = 3000

const app = express();

mongoose.connect("mongodb://test:test123@ds341837.mlab.com:41837/learning");


app.get('/', (req,res) => {
  res.send("hello with express");

});

app.listen(port, () => {
   console.log(`server started on port no ${port}`)
});