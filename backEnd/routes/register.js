const bcrypt = require('bcrypt');
const mysql = require('mysql');
const express = require('express');

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


exports.register = async (req, res) => {
    const pass = req.body.pass;
    const encryptedPassword = await bcrypt.hash(pass, 10);

    const users = { 
        'emailcliente': req.body.email,
        'senhacliente': encryptedPassword
    }

    conn.query('INSERT INTO cliente SET ?', users, (erro, results, fields) => {
        if(erro){
            res.send({'code': 400, 'failed': 'occorreu um erro'});
        }else{
            res.send({'code': 200, 'success': 'usuário registrado com sucesso'});
        }
    })
}