import React from "react";
import Header from "../Header";
import * as SiIcons from "react-icons/si";
import * as IoIcons from "react-icons/io5";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../context/AuthContext";
import api from "../API/api";
export default class PagCliente extends React.Component {
    state = {
        response: [],
        respFormas: [],
    };

    static contextType = Context;

    async componentDidMount() {
        const id = this.props.match.params.cliente_id;
        const request = await api.get(`/api/pageCliente/${id}`);
        this.setState({ response: request.data });
        const reqFormas = await api.get(`/api/formasPag/${id}`);
        this.setState({ respFormas: reqFormas.data.resp });
    }

    render() {
        let { authenticated, handleLogout } = this.context;

        const { response, respFormas } = this.state;
        console.log(response.cliente_id);
        console.log(respFormas);

        const id = this.props.match.params.cliente_id;

        if (authenticated) {
            return (
                <>
                    <Header />
                    <article className="w-10/12 rounded-xl border-4 bg-cultured shadow-lg border-dCultured mx-auto my-4 flex flex-col p-10 divide-y-2 divide-quickSilver">
                        {response.map(pessoa => (
                            <>
                                <div className="flex content-center divide-x-2 divide-eireBlack">
                                    <img
                                        src={pessoa.fotoCliente}
                                        alt="foto pessoa"
                                        className="rounded-full w-44 h-44 shadow-xl mx-2"
                                    />

                                    <div className="p-3 flex flex-col content-center">
                                        <p className="text-xl font-medium h-16 my-auto mx-10 ">
                                            {pessoa.nome_cliente}
                                        </p>
                                        <button className="mx-auto w-44 my-2 border-4 border-dCultured rounded-lg transition duration-200 hover:border-eireBlack">
                                            <Link to={`/alterUserInfo/${pessoa.cliente_id}`}>
                                                <p>editar informações</p>
                                            </Link>
                                        </button>

                                        <button className="mx-auto w-44 my-2 border-4 border-dCultured rounded-lg transition duration-200 hover:border-cat4">
                                            <Link to={`/deleteClientAccount/${pessoa.cliente_id}`}>
                                                <p>Exluir conta</p>
                                            </Link>
                                        </button>
                                    </div>

                                    <div className="flex flex-col px-2">
                                        <div className="my-auto ml-4">
                                            <h3 className="text-xl font-bold">
                                                Data de nascimento
                                            </h3>
                                            <p>{pessoa.datanasc_cliente}</p>
                                        </div>
                                        <div className="my-auto ml-4">
                                            <h3 className="text-xl font-bold">Celular</h3>
                                            <p>{pessoa.cel_cliente}</p>
                                        </div>
                                        <button
                                            className="border-4 border-quickSilver rounded-xl px-4 py-1 transition duration-200 ease-in mx-auto my-2 hover:border-red600"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-4 ">
                                    <h1 className="mt-4 text-2xl font-bold tracking-wide">
                                        Endereços cadastrados
                                    </h1>

                                    <div className="container mx-auto flex flex-col align-center">
                                        <div className="flex flex-row align-center justify-center mx-auto divide-x-2 divide-black w-10/12 mt-4">
                                            <div className="w-6/12 h-auto align-center text-center flex text-center align-center justify-center ">
                                                <p className="text-lg mb-2 mx-2">
                                                    {pessoa.endereco_cliente}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}

                        <div className="mt-4">
                            <h1 className="mt-4 text-2xl font-bold tracking-wide">
                                Formas de pagamento cadastradas
                            </h1>
                            <ul className="w-8/12 mx-auto my-4 flex flex-row">
                                {respFormas.map((formas, index) => (
                                    <>
                                        <li
                                            className="flex flex-col border-4 border-black w-60 p-2 rounded-xl mx-auto transition duration-200 hover:border-myrtleGreen"
                                            key={formas.formaPagId}
                                        >
                                            <div className="flex flex-row content-center">
                                                <h2 className="mx-auto my-2">
                                                    Cartão {index+1}
                                                </h2>
                                                <SiIcons.SiVisa className="w-8 h-8 my-auto mx-auto" />
                                                <button className="w-8 h-8 transition duration-200 mx-2 hover:text-maximumBlue">
                                                    <IoIcons.IoPencilSharp className="w-6 h-6 my-auto mx-2" />
                                                </button>
                                                <button className="w-8 h-8 transition duration-200 mx-2 hover:text-red600">
                                                    <IoIcons.IoTrashOutline className="w-6 h-6 my-auto mx-2" />
                                                </button>
                                            </div>

                                            <div className="flex flex-row">
                                                <p className="w-24 mx-2 font-black tracking-wide">
                                                    {formas.numeroCard}
                                                </p>
                                                <p className="tracking-wider">
                                                    {formas.dataVencimento}
                                                </p>
                                            </div>
                                        </li>
                                    </>
                                ))}
                            </ul>

                            <button className="border-4 border-quickSilver rounded-xl px-2 py-1 transition duration-200 ease-in hover:border-price">
                                <Link to={`/newCard/${id}`}>
                                    <p>Adicionar nova forma de pagamento</p>
                                </Link>
                            </button>
                        </div>
                    </article>
                </>
            );
        } else {
            return <Redirect to="/login" />;
        }
    }
}
