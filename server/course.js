var express = require('express');
const {model, db} = require('./model');
const {parser} = require('./utils');
var bodyParser = require('body-parser');

var router = express.Router();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {

    next();
});
// 定义网站主页的路由
router.route('/').get(async function (req, res) {

    const user = await db.User;
    data = user.find({}, function (err, data) {

        res.send(data)
    })
}).post(async function (req, res) {
    const {birth, createName} = req.body;
    const User = await db.User;
    User.create({birth, name: createName}, function (err, msg) {
        res.send(msg)
    })

}).delete(async function (req, res) {
    const User = await db.User;
    let id = req.param('id')
    User.find({id}).remove(function (err) {
        if (!err) {
            res.send('ok');
        }
    })
}).update(async function (req, res) {
    const {id, name} = req.body;
    const User = await db.User;
    User.find({id}).each((v) => v.name = name).save(function () {

    });
})

module.exports = router;