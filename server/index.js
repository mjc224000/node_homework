const express = require('express');
const db = require('./model');
const Course=require('./course');
const bodyParser=require('body-parser')
const app = express();


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Origin', '*');
    next()
})
app.use(bodyParser.json());

app.use('/course',Course)
app.listen(9311, function () {
    console.log(1);
})