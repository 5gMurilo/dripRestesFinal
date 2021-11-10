const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'driprestes'
})

conn.connect((err) => {
    if(!err){ 
        console.log('Database is conencted ...');
    }else{
        console.log('Error connecting database -> '+ err);
    }
});