// mysql/index.js

var mysql = require('mysql');
var config = require('../config/index');

var pool = mysql.createPool({
    host : config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

class Mysql {
    constructor() {}
    query() {
        return new Promise((resolve, reject) => {
            pool.query('select * from content', function(err, data) {
                if(err) {
                    reject(err);
                    throw error;
                }
                resolve(data)
            })
        })
    }
    queryUser() {
        return new Promise((resolve, reject) => {
            pool.query('select * from user', function(err, data) {
                if(err) {
                    throw err;
                }
                resolve(data);
            })
        })
    }
}

module.exports = new Mysql();
