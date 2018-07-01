const express = require('express');
const db = require('./model');
const chooseCourse=require('./choose');
const app = express();


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-custom');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Origin', '*');
    next()
})
app.get('/', function (req, res) {

})


app.listen(9331, function () {
    console.log(1);
})