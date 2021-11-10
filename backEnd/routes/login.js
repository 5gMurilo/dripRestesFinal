const bcrypt = require('bcrypt');
const express = require('express');
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

exports.login = async (req, res) => {
    var email = req.body.email; 
    var pass = req.body.pass;

    conn.query('SELECT * FROM cliente WHERE email_cliente = ?', [email], async (error, result, fields) => {
        if(error){
            res.send({
                'status': 400,
                'failed': 'Error ocurred'
            });
        }else{ 
            if(result.length > 0) {
                const comparation = await bcrypt.compare(pass, result[0].senhacliente);
                if(comparation){
                    res.send({
                        'code': 200,
                        'success': 'login successfull'
                    });
                }else{
                    res.send({
                        'code': 400,
                        'error': 'Email and password does not match'
                    });
                }
            }
        }
    })
}