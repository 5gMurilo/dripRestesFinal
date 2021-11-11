const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const session = require("express-session");
const convert = require("xml-js");

const app = express();
const port = 3001;

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "driprestes",
});

conn.connect(err => {
    if (!err) {
        app.listen(port, () => {
            console.log(`app online -> localhost:${port} `);
        });
    } else {
        console.log(err);
    }
});

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(
    session({
        key: "userID",
        secret: "us3r53s510n",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60 * 60 * 4,
        },
    })
);

const router = express.Router();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.get("/", (req, res) => {
    res.json({ status: 200, response: "servidor online" });
});

app.post("/login", (req, res) => {
    conn.query(
        "SELECT * FROM cliente WHERE email_cliente = ?",
        [req.body.email],
        (error, result, fields) => {
            if (error) {
                res.send({
                    status: 400,
                    failed: `error ocurred ${error} `,
                });
            } else {
                if (result.length > 0) {
                    const comparation = result[0].senhacliente == req.body.pass ? true : false;
                    if (comparation) {
                        req.session.user = result;

                        res.send({ auth: true, session: req.session.user });
                    } else {
                        res.send({ auth: false });
                    }
                }
            }
        }
    );
});

app.post("/sellerLogin", (req, res) => {
    console.log(req.body.email);

    conn.query(
        "SELECT * FROM vendedor WHERE email_vendedor = ?",
        [req.body.email],
        (error, result, fields) => {
            if (error) {
                res.send({
                    status: 400,
                    failed: `error ocurred ${error} `,
                });
            }
            if (result.length > 0) {
                const comparation = result[0].senha_vendedor == req.body.password ? true : false;
                if (comparation) {
                    console.log("inside if ->" + result[0]);
                    req.session.user = result;

                    res.send({ auth: true, session: req.session.user });
                } else {
                    res.send({ auth: false });
                }
            }
        }
    );
});

app.get("/getSession", (req, res) => {
    const session = req.session;
    if (session) {
        res.send({ exists: true, session: session });
    } else {
        res.send({ exists: false });
    }
});

app.get("/produtoXML/:vendedor_id", (req, res) => {
    const sql = `SELECT * FROM produto WHERE vendedor_id = ? `;

    conn.query(sql, [req.params.vendedor_id], (erro, result) => {
        res.header("Content-type", "application/xml");

        if (erro) {
            console.log(erro);
        }
        const opt = { compact: true, ignoreComment: true, spaces: 4 };

        console.log(result.length);

        let xml = '<?xml version="1.0" encoding="utf-8"?>';

        xml += `<produtos>`;

        for (let i = 0; i < result.length; i++) {
            let variable = convert.json2xml(result[i], opt);
            xml += `<produto>\n ${variable}\n</produto>`;
        }

        xml += `</produtos>`;

        res.send(xml);
    });
});

app.get("/produtoJSON/:vendedor_id", (req, res) => {
    const sql = `SELECT * FROM produto WHERE vendedor_id = ? `;

    conn.query(sql, [req.params.vendedor_id], (erro, result) => {
        if (erro) {
            console.log(erro);
        }

        res.send(result);
    });
});

app.get("/updateProduto/:produto_id", function (req, res) {
    conn.query(
        "SELECT * FROM produto WHERE produto_id=?",
        [req.params.produto_id],
        function (err, results, fields) {
            if (!err) {
                res.send(results);
            } else {
                res.send(err);
            }
        }
    );
});

app.post("/UpdateProduto/:produto_id", function (req, res) {
    const id = req.params.produto_id;
    const qtd_estoque = req.body.qtd_estoque;
    const vendedor_id = req.body.vendedor_id;
    const categoria_id = req.body.categoria_id;
    const preco_produto = req.body.preco_produto;
    const nome_produto = req.body.nome_produto;
    const marca = req.body.marca;
    console.log(id);
    conn.query(
        `UPDATE produto SET marca='${marca}', nome_produto="${nome_produto}", preco_produto=${preco_produto}, categoria_id=${categoria_id}, vendedor_id=${vendedor_id}, qtd_estoque=${qtd_estoque} WHERE produto_id=${id}`,
        function (err, results, fields) {
            if (!err) {
                res.send(results);
            } else {
                res.send(err);
            }
        }
    );
});

app.get("/deletarProduto/:produto_id", (req, res) => {
    const produto_id = req.params.produto_id;
    let sql = `DELETE FROM produto WHERE produto_id=${produto_id}`;
    conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send("produto deletado com sucesso!");
    });
});

//Atualizar dados do cliente
app.post("/UpdateCliente/:cliente_id", function (req, res) {
    db.query(
        "UPDATE cliente SET endereco_cliente=?,nome_cliente=?, cel_cliente=?, email_cliente=?, senha_cliente=?, datanasc_cliente=?, rg_cliente=?, cpf_cliente=? WHERE cliente_id=?",
        [
            req.body.endereco_cliente,
            req.body.nome_cliente,
            req.body.cel_cliente,
            req.body.email_cliente,
            req.body.senha_cliente,
            req.body.datanasc_cliente,
            req.body.rg_cliente,
            req.body.cpf_cliente,
            req.body.cliente_id,
        ]
    );
    res.send({ msg: "Usuário alterado com sucesso!" });
});

//Trazer dados do cliente preenchidos
app.get("/updateCliente/:cliente_id", function (req, res) {
    db.query(
        "select * from cliente where cliente_id=?",
        [req.params.cliente_id],
        function (err, results, fields) {
            console.log(results.data[0].nome_vendedor);
            res.send(results);
        }
    );
});

//Atualizar dados do vendedor
app.post("/UpdateVendedor/:vendedor_id", function (req, res) {
    const enderecoVendedor = req.body.endereco_vendedor;
    const nomeVendedor = req.body.nome_vendedor;
    const celVendedor = req.body.cel_vendedor; 
    const emailVendedor = req.body.email_vendedor;
    const senhavendedor = req.body.senha_vendedor;
    const datanascVendedor = req.body.datanasc_vendedor;
    const rgVendedor = req.body.rg_vendedor;
    const cpfVendedor = req.body.cpf_vendedor;
    const fotoVendedor = req.body.fotoVendedor;
    const idVendedor = req.params.vendedor_id;

    conn.query(
        `UPDATE vendedor SET endereco_vendedor='${enderecoVendedor}',nome_vendedor='${nomeVendedor}', cel_vendedor='${celVendedor}', email_vendedor='${emailVendedor}', senha_vendedor='${senhavendedor}', datanasc_cliente
        ='${datanascVendedor}', rg_vendedor='${rgVendedor}', cpf_vendedor='${cpfVendedor}', fotoVendedor = '${fotoVendedor}' WHERE vendedor_id=${idVendedor}`, (err, result) => {
            if(!err){
                res.send(result);
            }else{
                res.send(err);
            }
            
        }
    );
});

//Trazer dados do vendedor preenchidos
app.get("/updateVendedor/:vendedor_id", function (req, res) {
    conn.query(
        "select * from vendedor where vendedor_id=?",
        [req.params.vendedor_id],
        function (err, results, fields) {
            if(!err){
                res.send(results);
            }else{
                res.send(err);
            }
        }
    );
});

app.post("/inserirProduto", (req, res) => {

    const produto = req.body.nome_produto;
    const preco = req.body.preco_produto;
    const categoria_id = req.body.categoria_id;
    const vendedor_id = req.body.vendedor_id;
    const qtd_estoque = req.body.qtd_estoque;
    const descricao = req.body.descricao;
    const tamanho = req.body.tamanho;
    const marca = req.body.marca;
    const imagem = req.body.img;

    const sql = `INSERT INTO produto (nome_produto, preco_produto, categoria_id, vendedor_id, qtd_estoque, descricao, tamanho, imagem, marca ) values ("${produto}",${preco},${categoria_id},${vendedor_id},${qtd_estoque}, '${descricao}', '${tamanho}', '${imagem}', '${marca}')`;
    conn.query(sql, (err, result) => {
        if (err) {
            res.send(err)
        };

        res.send({ msg: "poduto cadastrado com sucesso!", resp: result });
    });

});
//get routes
router.get("/shoes", routes.shoes);
router.get("/top", routes.top);
router.get("/shoes", routes.shoes);
router.get("/shopAll", routes.shopAll);
router.get("/searchprod/:prodname", routes.searchProd);
router.get("/prod/:idProd", routes.pageProd);
router.get("/pageCliente/:cliente_id", routes.pageCliente);
router.get("/formasPag/:cliente_id", routes.formasPagCliente);
router.get("/sellerPage/:vendedor_id", routes.sellerPage);
router.get("/sellerSells/:vendedor_id", routes.sellerSells);
router.get("/sellerProds/:vendedor_id", routes.sellerProds);
//post routes
router.post("/register", routes.register);

app.use("/api", router);
