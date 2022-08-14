var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'zjc313771069',
    port: '3306',
    database: 'websites'
});

connection.connect();

var sql = 'SELECT * FROM websites';

// 查
connection.query(sql, function(err, result) {
    if(err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }

    console.log('-----------------SELECT------------------------');
    console.log(result);
    console.log('-----------------------------------------------\n\n');
});

connection.end();
