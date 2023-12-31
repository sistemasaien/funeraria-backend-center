
const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
    keepAlive: true
});

console.log('try to connect with the next data:', {
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
    enableKeepAlive: true
});
            

//getConnection
const connect = pool.getConnection(function (err, connection) {
    if (err) {
        connection?.release();
        console.error('Error al conectarse a la base de datos:', err);
        setTimeout(connect, 2000); // intenta reconectar después de 2 segundos
    } else {
        console.log('Conexión establecida con la base de datos');
    }
});

module.exports = pool;
