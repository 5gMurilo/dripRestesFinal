/* eslint-disable eqeqeq */
import React, { Component } from "react";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";
import api from "../../API/api";
import {Redirect} from 'react-router-dom'
export default class alterInfo extends Component {
    state = {
        sellerToBeUpdated: [],
        loaded: false,
        clienteId: 0,
        nomecliente: "",
        celcliente: "",
        emailcliente: "",
        senhacliente: "",
        dataNasccliente: "",
        enderecocliente: "",
        rgcliente: "",
        cpfcliente: "",
        fotocliente: "",
        redirect: false,
    };

    async componentDidMount() {
        const id = this.props.match.params.cliente_id;
        const request = await api.get(`/updatecliente/${id}`);
        this.setState({ sellerToBeUpdated: request, loaded: true });
    }

    render() {
        const {
            sellerToBeUpdated,
            loaded,
            fotocliente,
            nomecliente,
            celcliente,
            emailcliente,
            senhacliente,
            dataNasccliente,
            rgcliente,
            cpfcliente,
            enderecocliente,
        } = this.state;

        console.log(loaded ? sellerToBeUpdated.data[0].endereco_cliente : []);

        
        const id = this.props.match.params.cliente_id;
        console.log(enderecocliente);

        function DoUpdate() {

            api.post(`/UpdateCliente/${id}`, {
                endereco_cliente:
                    enderecocliente == ""
                        ? sellerToBeUpdated.data[0].endereco_cliente
                        : enderecocliente,
                nome_cliente:
                    nomecliente === "" ? sellerToBeUpdated.data[0].nome_cliente : nomecliente,
                cel_cliente:
                    celcliente === "" ? sellerToBeUpdated.data[0].cel_cliente : celcliente,
                email_cliente:
                    emailcliente === "" ? sellerToBeUpdated.data[0].email_cliente : emailcliente,
                senha_cliente:
                    senhacliente === "" ? sellerToBeUpdated.data[0].senha_cliente : senhacliente,
                datanasc_cliente:
                    dataNasccliente === ""
                        ? sellerToBeUpdated.data[0].datanasc_cliente
                        : dataNasccliente,
                rg_cliente: rgcliente === "" ? sellerToBeUpdated.data[0].rg_cliente : rgcliente,
                cpf_cliente:
                    cpfcliente === "" ? sellerToBeUpdated.data[0].cpf_cliente : cpfcliente,
                fotoCliente:
                    fotocliente === "" ? sellerToBeUpdated.data[0].fotoCliente : fotocliente,
            }).then(resp => {
                console.log(resp);
                alert("Dados alterados, volte a página anterior");
                return <Redirect to={`/myPage/${sellerToBeUpdated.data[0].cliente_id}`} />
            });
        }
        return (
            <div>
                <header className="w-full h-auto py-2 flex align-center shadow-xl mb-10">
                    <Logo className=" w-32 h-32 align-center tex-center flex mx-auto" />
                </header>

                <h1 className="w-2/5 h-auto text-center align-center justify-center mx-auto font-bold text-2xl">
                    Alterar dados
                </h1>

                <h3 className="w-2/5 h-auto text-center align-center justify-center mx-auto font-bold text-lg text-quickSilver py-4">
                    Carregamos as informações do seu perfil, altere apenas aquelas que desejar, não
                    é necessário alterar as que estão corretas e nem apagá-las
                </h3>

                <div className="w-3/5 h-auto flex flex-col mx-auto mt-4">
                    <div className="flex flex-row">
                        <div className="flex flex-col w-5/6 mx-auto">
                            <p className="w-4/12 font-semibold text-lg mx-2">Nome completo</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded ? sellerToBeUpdated.data[0].nome_cliente : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].nome_cliente
                                        ? this.setState({ nomecliente: e.target.value })
                                        : this.setState({
                                              nomecliente: sellerToBeUpdated.data[0].nome_cliente,
                                          })
                                }
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">E-mail</p>
                            <input
                                type="email"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded
                                        ? sellerToBeUpdated.data[0].email_cliente
                                        : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].email_cliente
                                        ? this.setState({ emailcliente: e.target.value })
                                        : this.setState({
                                              emailcliente:
                                                  sellerToBeUpdated.data[0].email_cliente,
                                          })
                                }
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">RG</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded ? sellerToBeUpdated.data[0].rg_cliente : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].rg_cliente
                                        ? this.setState({ rgcliente: e.target.value })
                                        : this.setState({
                                              rgcliente: sellerToBeUpdated.data[0].rg_cliente,
                                          })
                                }
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">Senha</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded
                                        ? sellerToBeUpdated.data[0].senha_cliente
                                        : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].senha_cliente
                                        ? this.setState({ senhacliente: e.target.value })
                                        : this.setState({
                                              senhacliente:
                                                  sellerToBeUpdated.data[0].senha_cliente,
                                          })
                                }
                            />
                        </div>

                        <div className="flex flex-col w-5/6 mx-auto">
                            <p className="w-4/12 font-semibold text-lg mx-2">CPF</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded ? sellerToBeUpdated.data[0].cpf_cliente : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].cpf_cliente
                                        ? this.setState({ cpfcliente: e.target.value })
                                        : this.setState({
                                              cpfcliente: sellerToBeUpdated.data[0].cpf_cliente,
                                          })
                                }
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">Endereço</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded
                                        ? sellerToBeUpdated.data[0].endereco_cliente
                                        : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].endereco_cliente
                                        ? this.setState({ enderecocliente: e.target.value })
                                        : this.setState({
                                            enderecocliente:
                                                  sellerToBeUpdated.data[0].endereco_cliente,
                                          })
                                }
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">Celular</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded ? sellerToBeUpdated.data[0].cel_cliente : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].cel_cliente
                                        ? this.setState({ celcliente: e.target.value })
                                        : this.setState({
                                              celcliente: sellerToBeUpdated.data[0].cel_cliente,
                                          })
                                }
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">Imagem de perfil</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={loaded ? sellerToBeUpdated.data[0].fotoCliente : ""}
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].fotoCliente
                                        ? this.setState({ fotocliente: e.target.value })
                                        : this.setState({
                                              fotocliente: sellerToBeUpdated.data[0].fotoCliente,
                                          })
                                }
                            />
                        </div>
                    </div>

                    <button
                        className="py-1 px-2 mt-4 mx-auto border-2 bg-dCultured border-eireBlack mt-2"
                        onClick={DoUpdate}
                    >
                        <input type="submit" className="bg-dCultured" />
                    </button>
                </div>
            </div>
        );
    }
}
