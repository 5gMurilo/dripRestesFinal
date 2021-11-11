import React from "react";
import api from "../API/api";
import { Context } from "../context/AuthContext";
import Header from "../Header";
import { Link, Redirect } from "react-router-dom";
import SellerCards from "../sellerCards";

export default class SellerPage extends React.Component {
    state = {
        response: [],
        responseProds: [],
        responseSells: []
    };

    static contextType = Context;

    async componentDidMount() {
        const id = this.props.match.params.vendedor_id;
        const request = await api.get(`/api/sellerPage/${id}`);
        const reqProds = await api.get(`/api/sellerProds/${id}`);
        const reqVendas = await api.get(`/api/sellerSells/${id}`);
        this.setState({ response: request.data, responseProds: reqProds.data, responseSells: reqVendas.data});
    }

    render() {
        let { authenticated, handleLogout} = this.context;

        const { response, responseProds,responseSells } = this.state;
        const id = this.props.match.params.vendedor_id;
        console.log("====================================");
        console.log(response);
        console.log(authenticated);
        console.log(responseSells == 0); 
        console.log("====================================");

        if (authenticated) {
            return (
                <div>
                    <Header />

                    <article className="w-10/12 h-auto border-4 border-dCultured bg-cultured rounded-xl mx-auto my-6 p-4 divide-y-2 divide-eireBlack shadow-green">
                        {response.map(vendedor => (
                            <>
                                <div className="container divide-x-2 flex flex-row divide-eireBlack mb-10">
                                    <img
                                        src={vendedor.fotoVendedor}
                                        alt="vendedor"
                                        className="rounded-full w-52 h-52 shadow-xl mx-2"
                                    />

                                    <div className="w-90">
                                        <div className="mx-10 w-64">
                                            <h1 className="text-lg font-bold">
                                                {vendedor.nome_vendedor}
                                            </h1>

                                            <button className="mx-auto w-44 my-2 border-4 border-dCultured rounded-lg transition duration-200 hover:border-eireBlack">
                                                <Link to={`/alterSellerInfo/${vendedor.vendedor_id}`}>
                                                <p>editar informações</p>
                                                </Link>
                                            </button>

                                            <button className="mx-auto w-44 my-2 border-4 border-dCultured rounded-lg transition duration-200 hover:border-cat4">
                                                <p>Excluir conta</p>
                                            </button>

                                            <button className="mx-auto w-44 my-2 border-4 border-dCultured rounded-lg transition duration-200 hover:border-price">
                                                <a href={`http://localhost:3001/produtoXML/${id}`}>
                                                    <p>Visualizar produtos em XML</p>
                                                </a>
                                            </button>

                                            <button className="mx-auto w-44 my-2 border-4 border-dCultured rounded-lg transition duration-200 hover:border-price">
                                                <a href={`http://localhost:3001/produtoJSON/${id}`}>
                                                    <p>Visualizar produtos em JSON</p>
                                                </a>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="ml-10">
                                            
                                            <button
                                                className="text-xl ml-6 mt-6 border-4 rounded-xl py-1 px-2 transition duration-200 ease-in border-red600 bg-red600 text-cultured 
                                                hover:shadow-lg hover:bg-dCultured hover:text-eireBlack"
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </button>
                                        </div>

                                        <div className="flex flex-col ml-10">
                                            <p className="text-2xl font-bold tracking-wide mt-10">
                                                {responseSells.length} venda(s) realizada(s)
                                            </p>
                                            <button className=" w-44 h-14 my-2 border-4 border-dCultured rounded-lg transition duration-200 hover:border-cat1">
                                                Visualizar suas vendas
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row mx-auto divide-x-2 divide-black ">
                                    <div className="flex flex-col mr-4">
                                        <h2 className="mt-6 text-2xl font-bold mb-4">
                                            Dados pessoais
                                        </h2>

                                        <div>
                                            <div className="ml-4">
                                                <h3 className="text-xl font-medium underline">
                                                    Seu endereço
                                                </h3>
                                                <p className="text-lg">
                                                    {vendedor.endereco_vendedor}
                                                </p>
                                            </div>

                                            <div className="ml-4">
                                                <h3 className="text-xl font-medium underline">
                                                    CPF
                                                </h3>
                                                <p className="tracking-wider">{vendedor.cpf_vendedor}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-96 flex flex-col">
                                        <div className="ml-4">
                                            <h1 className="text-2xl font-bold mt-6 mb-4">
                                                Ações na plataforma
                                            </h1>

                                            <div className="grid grid-cols-2 ">
                                                <button className="border-4 border-eireBlack m-4 rounded-xl transition duration-200 ease-out hover:border-cat1">
                                                    <Link to={`/insertProduct/${id}`}>
                                                        Inserir produto
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3'>
                                    {responseProds.map( prod => (
                                        <SellerCards 
                                            categoria={prod.categoria_id}
                                            length={prod.length}
                                            index={prod.produto_id}
                                            nomeProduto={prod.nome_produto}
                                            id={prod.produto_id}
                                            preco={prod.preco_produto}
                                            imagem={prod.imagem}
                                        />
                                    ))}

                                    
                                </div>

                            </>
                        ))}
                    </article>
                </div>
            );
        } else {
            return <Redirect to="/login" />;
        }
    }
}
