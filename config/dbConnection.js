const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
  host: 'sql2.freemysqlhosting.net',
    user: 'sql2342276',
    password: 'cE8%eG1*',
    database: 'sql2342276'

    });
}