import React, { Component } from "react";
import { Redirect } from "react-router";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";
import api from "../../API/api";

export default class altersellinfo extends Component {
    state = {
        sellerToBeUpdated: [],
        loaded: false,
        vendedorId: 0,
        nomeVendedor: "",
        celVendedor: "",
        emailVendedor: "",
        senhaVendedor: "",
        dataNascVendedor: "",
        enderecoVendedor: "",
        rgVendedor: "",
        cpfVendedor: "",
        fotoVendedor: "",
        redirect: false,
    };

    async componentDidMount() {
        const id = this.props.match.params.vendedor_id;
        const request = await api.get(`/updateVendedor/${id}`);
        this.setState({ sellerToBeUpdated: request, loaded: true });
    }

    render() {
        const {
            sellerToBeUpdated,
            loaded,
            fotoVendedor,
            vendedorId,
            nomeVendedor,
            celVendedor,
            emailVendedor,
            senhaVendedor,
            dataNascVendedor,
            rgVendedor,
            cpfVendedor,
            enderecoVendedor,
            redirect,
        } = this.state;

        console.log(loaded ? sellerToBeUpdated.data[0].endereco_vendedor : []);

        console.log(enderecoVendedor);
        console.log(nomeVendedor);
        console.log(celVendedor);
        console.log(emailVendedor);
        console.log(senhaVendedor);
        console.log(dataNascVendedor);
        console.log(rgVendedor);
        console.log(cpfVendedor);
        console.log(fotoVendedor);

        

        function doUpdate() {
            api.post(`/UpdateVendedor/${sellerToBeUpdated.data[0].vendedor_id}`, {
                endereco_vendedor: enderecoVendedor === '' ? sellerToBeUpdated.data[0].endereco_vendedor : enderecoVendedor ,
                nome_vendedor: nomeVendedor === '' ? sellerToBeUpdated.data[0].nome_vendedor : nomeVendedor,
                cel_vendedor: celVendedor === ''? sellerToBeUpdated.data[0].cel_vendedor : celVendedor,
                email_vendedor: emailVendedor === ''? sellerToBeUpdated.data[0].email_vendedor : emailVendedor,
                senha_vendedor: senhaVendedor === ''? sellerToBeUpdated.data[0].senha_vendedor : senhaVendedor,
                datanasc_cliente: dataNascVendedor === ''? sellerToBeUpdated.data[0].datanasc_vendedor : dataNascVendedor,
                rg_vendedor: rgVendedor === ''? sellerToBeUpdated.data[0].rg_vendedor : rgVendedor,
                cpf_vendedor: cpfVendedor === ''? sellerToBeUpdated.data[0].cpf_vendedor : cpfVendedor,
                fotoVendedor: fotoVendedor === ''? sellerToBeUpdated.data[0].fotoVendedor : fotoVendedor,
            }).then(resp => {
                console.log(resp);
                alert('Dados alterados, volte a página anterior')
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
                                    this.state.loaded ? sellerToBeUpdated.data[0].nome_vendedor : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].nome_vendedor
                                        ? this.setState({ nomeVendedor: e.target.value })
                                        : this.setState({
                                              nomeVendedor: sellerToBeUpdated.data[0].nome_vendedor,
                                          })
                                }
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">E-mail</p>
                            <input
                                type="email"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded
                                        ? sellerToBeUpdated.data[0].email_vendedor
                                        : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].email_vendedor
                                        ? this.setState({ emailVendedor: e.target.value })
                                        : this.setState({
                                              emailVendedor:
                                                  sellerToBeUpdated.data[0].email_vendedor,
                                          })
                                }
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">RG</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded ? sellerToBeUpdated.data[0].rg_vendedor : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].rg_vendedor
                                        ? this.setState({ rgVendedor: e.target.value })
                                        : this.setState({
                                              rgVendedor: sellerToBeUpdated.data[0].rg_vendedor,
                                          })
                                }
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">Senha</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded
                                        ? sellerToBeUpdated.data[0].senha_vendedor
                                        : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].senha_vendedor
                                        ? this.setState({ senhaVendedor: e.target.value })
                                        : this.setState({
                                              senhaVendedor:
                                                  sellerToBeUpdated.data[0].senha_vendedor,
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
                                    this.state.loaded ? sellerToBeUpdated.data[0].cpf_vendedor : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].cpf_vendedor
                                        ? this.setState({ cpfVendedor: e.target.value })
                                        : this.setState({
                                              cpfVendedor: sellerToBeUpdated.data[0].cpf_vendedor,
                                          })
                                }
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">Endereço</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded
                                        ? sellerToBeUpdated.data[0].endereco_vendedor
                                        : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].endereco_vendedor
                                        ? this.setState({ enderecoVendedor: e.target.value })
                                        : this.setState({
                                              enderecoVendedor:
                                                  sellerToBeUpdated.data[0].endereco_vendedor,
                                          })
                                }
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">Celular</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded ? sellerToBeUpdated.data[0].cel_vendedor : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].cel_vendedor
                                        ? this.setState({ celVendedor: e.target.value })
                                        : this.setState({
                                              celVendedor: sellerToBeUpdated.data[0].cel_vendedor,
                                          })
                                }
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">Imagem de perfil</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    loaded ? sellerToBeUpdated.data[0].fotoVendedor : ""
                                }
                                onChange={e =>
                                    e.target.value != sellerToBeUpdated.data[0].fotoVendedor
                                        ? this.setState({ fotoVendedor: e.target.value })
                                        : this.setState({
                                            fotoVendedor: sellerToBeUpdated.data[0].fotoVendedor,
                                          })
                                }
                            />
                        </div>
                    </div>

                    <button
                        className="py-1 px-2 mt-4 mx-auto border-2 bg-dCultured border-eireBlack mt-2"
                        onClick={doUpdate}
                    >
                        <input type="submit" className='bg-dCultured'/>
                    </button>
                </div>
            </div>
        );
    }
}
