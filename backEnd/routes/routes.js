const mysql = require('mysql');
const session = require('express-session');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const exp = express(); 

exp.use(cookieParser());
exp.use(session({
    key: 'userID',
    secret: 'us3r53s510n',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 12,
    }
}))

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'driprestes'
})

conn.connect((err) => {
    if(!err){ 
        console.log('Database is connected ...');
    }else{
        console.log('Error connecting database -> '+ err);
    }
});


exports.register = (req, res) => {
    const emailusuario =  req.body.email;
    const senhausuario = req.body.senha;
    const nomeusuario = req.body.nome; 
    const datanasc_usuario = req.body.datanasc; 
    const endereco = req.body.endereco; 
    const perfil = req.body.perfil; 
    const foto = req.body.foto; 
    const cpf_usuario = req.body.cpf; 
    const rg_usuario = req.body.rg; 
    const celusuario = req.body.cel; 

    console.log(senhausuario);
    console.log(emailusuario);
    console.log(nomeusuario);

    conn.query('INSERT INTO usuarios (nomeusuario, emailusuario, senhausuario, celusuario, fotousuario, endereco, rg_usuario, cpf_usuario, datanasc_usuario, perfType) values (?,?,?,?,?,?,?,?,?,?);', [nomeusuario,emailusuario,senhausuario,celusuario,foto,endereco,rg_usuario,cpf_usuario,datanasc_usuario,perfil], (erro, results, fields) => {
        if(erro){
            res.send({'code': 400, 'failed': `ocorreu um erro ${erro}`});
        }else{
            if(results){
                res.send({'code': 200, 'success': 'usuário registrado com sucesso'});
            }else{
                res.send({'code': 400, 'fail': 'usuário registrado com sucesso'});
            }
        }
    })
}

exports.login = (req, res) => {

    conn.query('SELECT * FROM cliente WHERE email_cliente = ?', [req.body.email],  (error, result, fields) => {
        
        if(error){
            res.send({
                'status': 400,
                'failed': `error ocurred ${error} `
            });
        }else{ 
            if(result.length) {
                const comparation = result[0].senhacliente == req.body.pass ? true : false;
                if(comparation){
                    req.session.user = result
                    console.log(req.session.user);
                    res.json(comparation);
                }else{
                    res.json(comparation);
                }
            }
        }

    });

}

exports.shoes = (req, res) => {
    const query = 'SELECT * FROM produto WHERE categoria_id = ?';
    const categoria = 1;

    conn.query(query, [categoria], (erro,resp) =>{ 
        if(erro){ 
            res.json({status: `Ocorreu um erro -> ${erro}`});
        }

        if(resp.length > 0 ){ 
            res.json(resp);
        }else{ 
            res.json('Não conseguimos encontrar nenhum produto nesta categoria');
        }
    });
}

exports.bottom = (req, res) => {
    const query = 'SELECT * FROM produto WHERE categoria_id = ?';
    const categoria = 4;

    conn.query(query, [categoria], (erro,resp) =>{ 
        if(erro){ 
            res.json({status: `Ocorreu um erro -> ${erro}`});
        }

        if(resp.length > 0 ){ 
            res.json(resp);
        }else{ 
            res.json('Não conseguimos encontrar nenhum produto nesta categoria');
        }
    });
}

exports.top = (req, res) => {
    const query = 'SELECT * FROM produto WHERE categoria_id = ?';
    const categoria = 2;

    conn.query(query, [categoria], (erro, resp) => {
        if(erro) {
            res.json({status: `ocorreu um erro -> ${erro}`});
        }

        if(resp.length){
            res.json(resp);
        }else{ 
            res.json('não conseguimos encontrar nenhum produto nesta categoria');
        }
    })
}

exports.shopAll = (req, res) => {
    const query = 'SELECT * FROM produto';

    conn.query(query, (erro, resp) => {
        if(erro) {
            res.json({status: `ocorreu um erro -> ${erro}`});
        }

        if(resp.length > 0){
            res.json(resp);
        }else{ 
            res.json('não conseguimos encontrar nenhum produto nesta categoria');
        }
    })
}

exports.searchProd = (req, res) => {
    const prodName = req.params.prodname;
    const query = `SELECT * FROM produto WHERE nome_produto LIKE "%${prodName}%"`;

    conn.query(query, (erro, resp) => {
        if(erro){
            res.json({status: `ocorreu um erro ao realizarmos a rquisição ${erro}`})
        }

        if(resp.length == 0){ 
            res.json({status: `o produto ${prodName} não existe na nossa base de dados`, bool: false});
        }else{ 
            res.json({resp, bool: true});
        }
    })
}

exports.pageProd = (req, res) => {
    const query = `SELECT * FROM produto WHERE produto_id = ?`;
    const param = req.params.idProd;

    conn.query(query, param, (erro, resp)=> {
        if(erro){
            res.json({status: `ocorreu um erro ao realizarmos a requisição ${erro}`});
        }
        if(!resp){
            res.json({status: "ocorreu um erro ao procurarmos esse produto"});
        }else{
            res.json(resp);
        }
    })
}

exports.pageCliente = (req, res) => { 
    const query = `SELECT * FROM cliente WHERE cliente_id = ? `;
    const param = req.params.cliente_id; 

    conn.query(query, param, (erro, resp) => { 
        if(erro){ 
            console.log(erro);
            res.json({resposta: `Ocorreu um erro ao realizarmos a requisição ${erro}`, status: 404})
        }

        if(!resp){ 
            res.json({resposta: 'Não conseguimos fazer a requisição dos seus dados, tente novamente'})
        }else{ 
            res.json(resp);
        }
    })
}

exports.formasPagCliente = (req, res) => {
    const query = `SELECT * FROM formaspagamento WHERE cliente_id = ?`; 
    const param = req.params.cliente_id;

    conn.query(query, param, (erro, resp) => { 
        if(erro){ 
            res.json({resposta: `Ocorreu um erro -> ${erro}`, status: 404});
        }

        if(resp){
            res.json({bool: true, resp: resp});
        }else{ 
            res.json({bool: false, resp: 'Não conseguimos encontrar nenhuma forma de pagamento'});
        }
    })
}

exports.sellerPage = (req, res) => { 
    const query = `SELECT * FROM vendedor WHERE vendedor_id = ? `;
    const param = req.params.vendedor_id; 

    conn.query(query, param, (erro, resp) => { 
        if(erro){ 
            console.log(erro);
            res.json({resposta: `Ocorreu um erro ao realizarmos a requisição ${erro}`, status: 404})
        }

        if(!resp){ 
            res.json({resposta: 'Não conseguimos fazer a requisição dos seus dados, tente novamente'})
        }else{ 
            res.json(resp);
        }
    })
}

exports.sellerProds = (req, res) => { 
    const query = `SELECT * FROM produto WHERE vendedor_id = ? `;
    const param = req.params.vendedor_id; 

    conn.query(query, param, (erro, resp) => { 
        if(erro){ 
            console.log(erro);
            res.json({resposta: `Ocorreu um erro ao realizarmos a requisição ${erro}`, status: 404})
        }


        if(!resp){ 
            res.json({resposta: 'Não conseguimos fazer a requisição dos seus dados, tente novamente'})
        }else{ 
            res.json(resp);
        }
    })
}

exports.sellerSells = (req, res) => {
    const idV = req.params.vendedor_id;
    const query = `SELECT * FROM venda WHERE vendedor_id = ${idV}`

    conn.query(query, (err, resp) => {
        if(err){
            console.log(erro);
            res.json({resposta: `Ocorreu um erro ao realizarmos a requisição ${erro}`, status: 404})
        }

        console.log(resp);
        if(resp){
            res.send(resp);
        }else{ 
            res.send({complete: false, resp: resp});
        }
    })
}