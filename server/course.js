const express = require('express');
const app = express();
const route = express.Router()
route.use(function (req,res,next) {
    next();
})
route.get(function (req, res) {
    res.send('get')
}).post(function (req, res) {
   res.send('post')
}).put(function (req,res) {
    res.send('put')
}).delete(function (req,res) {
    res.send('delete')
})
module.exports={route}