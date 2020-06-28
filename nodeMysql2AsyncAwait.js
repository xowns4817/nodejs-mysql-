const pool = require("./config").getMysql2Pool;

const dbTest = async () => {
    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            let sql = "select * from testTable";
            const [rows] = await connection.query(sql);
            console.log("rows : ", rows);
        } catch(err) {
            console.log("Query Error : ", err);
        } finally {
            connection.release();
        }
    } catch (err) {
        console.log("DB Error : ", err);
    }
}
dbTest();