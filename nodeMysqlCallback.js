const pool = require("./config").getMysqlPool;

let sql = "select * from testTable";
pool.getConnection((err, conn) => {
    if(err) console.log(err);
    else {
        conn.query(sql, (err, results, fields) => {
            if(err) console.log(err);
            else console.log(results);
        });
        conn.release();
    }
});