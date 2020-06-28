const mysql = require("mysql");
const mysql2 = require("mysql2/promise");
const dbConfig = {
    host: "localhost",
    port: 3306,
    user: "xowns9418",
    password: "qwer1234",
    database: "testDb",
    connectionLimit: 50
}

module.exports.getMysqlPool = mysql.createPool(dbConfig);
module.exports.getMysql2Pool = mysql2.createPool(dbConfig);