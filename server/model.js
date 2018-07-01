var orm = require("orm");
const {generateMixed, tick, parser} = require('./utils')
const enforce = orm.enforce
const model = {}, db = {};
var opts = {
    host: 'mjc224000.top',
    database: 'myhomework',
    protocol: 'mysql',
    port: '3306',
    query: {pool: true},
    username: 'root',
    password: '7898ikuojl'
};
//model
const user = {id: Number, birth: Number, name: String};
model.user = user;
//db
db.User = orm.connectAsync(opts).then(function (db) {
    const User = db.define('user', user, {
        fullName: function () {
            return this.name;
        },
        validations: {
            birth: enforce.ranges.number(1991, 2020, "my age")
        }
    });

    /*   for(var i=0;i<10000;i++){
           User.create({name:generateMixed(5),birth:1993},function () {

           });
       }*/
    return User;
});
module.exports = {db, model}