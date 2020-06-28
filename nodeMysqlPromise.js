const pool = require("./config").getMysqlPool;

const dbTest = async () => {
    
    try {
        let selectResult = await mysqlPromise();
        console.log(selectResult);
    } catch (e) {
        console.log("error : ", e);
    };   


/*
    mysqlPromise().then((results) => {
        console.log(results);
    }).catch((error) => {
        console.log("!!!!");
    });
*/
};

const mysqlPromise = function( ) {
    return new Promise((resolve, reject) => {

        let sql = "select * from testTable";
        pool.getConnection((err, conn) => {
            if(err) {
                reject(err);
            }
            else {
                conn.query(sql, (err, results, fields) => {
                    if(err) reject(err);
                    else resolve(results);
                });
                conn.release();
            }
        });
    });
}

dbTest();