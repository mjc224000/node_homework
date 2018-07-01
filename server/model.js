var orm = require("orm");
const enforce = orm.enforce
var opts = {
    host: 'mjc224000.top',
    database: 'myhomework',
    protocol: 'mysql',
    port: '3306',
    query: {pool: true},
    username: 'root',
    password: '7898ikuojl'
};
const user = {id: Number, birth: Number, name: String};

orm.connectAsync(opts).then(function (db) {
 const User=  db.define('user', user, {
        fullName: function () {
            return this.name;
        },
        validations: {
            birth: enforce.ranges.number(1991,2020,"my age")
        }
    });
User.create({name:'JohnX',birth:1992},function (err,data) {
    console.log(data);
});

})


module.exports = {};