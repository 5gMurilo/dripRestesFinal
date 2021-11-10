import React, { Component, useEffect } from "react";
import { Redirect } from "react-router";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";
import api from "../../API/api";

export default class alterProd extends Component {
    state = {
        prodToBeUpdated: [],
        loaded: false,
        nomeProd: "",
        marcaProd: "",
        qtdProd: 0,
        precoProd: 0,
        imgProd: "",
        redirect: false,
    };

    async componentDidMount() {
        const id = this.props.match.params.produto_id;
        const request = await api.get(`/updateProduto/${id}`);
        this.setState({ prodToBeUpdated: request, loaded: true });
    }

    async componentDidUpdate() {
        if (this.state.loaded) {
            console.log(this.state.loaded);
        }
    }

    render() {
        const { prodToBeUpdated, nomeProd, marcaProd, qtdProd, imgProd, precoProd } = this.state;
        const id = this.props.match.params.produto_id;

        console.log(id);
        console.log(nomeProd);
        console.log(marcaProd);
        console.log(qtdProd);
        console.log(imgProd);
        console.log(precoProd);
        console.log(prodToBeUpdated);

        function doUpdate() {
            api.post(`/UpdateProduto/${id}`, {
                nome_produto: nomeProd,
                preco_produto: precoProd,
                categoria_id: prodToBeUpdated.data[0].categoria_id,
                vendedor_id: prodToBeUpdated.data[0].vendedor_id,
                qtd_estoque: qtdProd,
                marca: marcaProd,
                produto_id: id,
            }).then(resp => {
                console.log(resp);
            });
        }
        return (
            <>
                <header className="w-full h-auto py-2 flex align-center shadow-xl mb-10">
                    <Logo className=" w-32 h-32 align-center tex-center flex mx-auto" />
                </header>

                <main className="w-11/12 mx-0 py-4 md:mx-auto">
                    <h1 className="text-2xl font-bold tracking-wide mx-auto w-max mb-4">
                        Alterar produto
                    </h1>

                    <div className="w-9/12 mx-auto h-auto divide-eireBlack sm:w-full">
                        <div className="w-4/12 mx-auto">
                            <label className="text-lg mr-2">nome do produto</label>
                            <input
                                type="text"
                                className="border-b-2 border-eireBlack outline-none w-full"
                                defaultValue={
                                    this.state.loaded ? prodToBeUpdated.data[0].nome_produto : ""
                                }
                                onChange={e =>
                                    e.target.value != prodToBeUpdated.data[0].qtd_estoque
                                        ? this.setState({ nomeProd: e.target.value })
                                        : this.setState({
                                              nomeProd: prodToBeUpdated.data[0].nome_produto,
                                          })
                                }
                            />
                        </div>

                        <container className="flex flex-col mx-auto w-max mt-4 md:flex-row">
                            <div className="flex flex-row md:flex-col">
                                <div className="flex flex-col m-2 md:flex-row">
                                    <div className="m-2">
                                        <p className="text-lg">Marca do produto</p>
                                        <input
                                            type="text"
                                            name="marca"
                                            id="marca"
                                            className="border-b-2 border-eireBlack outline-none"
                                            defaultValue={
                                                this.state.loaded
                                                    ? prodToBeUpdated.data[0].marca
                                                    : ""
                                            }
                                            onChange={e =>
                                                e != prodToBeUpdated.data[0].marca
                                                    ? this.setState({ marcaProd: e.target.value })
                                                    : this.setState({
                                                          marcaProd: prodToBeUpdated.data[0].marca,
                                                      })
                                            }
                                        />
                                    </div>
                                    <div className="m-2">
                                        <p className="text-lg">quantidade</p>
                                        <input
                                            type="number"
                                            className="border-b-2 border-eireBlack outline-none"
                                            defaultValue={
                                                this.state.loaded
                                                    ? prodToBeUpdated.data[0].qtd_estoque
                                                    : 0
                                            }
                                            onChange={e =>
                                                e.target.value !=
                                                prodToBeUpdated.data[0].qtd_estoque
                                                    ? this.setState({ qtdProd: e.target.value })
                                                    : this.setState({
                                                          qtdProd:
                                                              prodToBeUpdated.data[0].qtd_estoque,
                                                      })
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col m-2 md:flex-row">
                                    <div className="m-2">
                                        <p className="text-lg">Preço</p>
                                        <input
                                            type="number"
                                            name="preco"
                                            id="preco"
                                            className="border-b-2 border-eireBlack outline-none w-full"
                                            defaultValue={
                                                this.state.loaded
                                                    ? prodToBeUpdated.data[0].preco_produto
                                                    : ""
                                            }
                                            onChange={e =>
                                                e.target.value !=
                                                prodToBeUpdated.data[0].preco_produto
                                                    ? this.setState({ precoProd: e.target.value })
                                                    : this.setState({
                                                          precoProd:
                                                              prodToBeUpdated.data[0].preco_produto,
                                                      })
                                            }
                                        />
                                    </div>
                                    <div className="m-2">
                                        <div className="flex flex-row align-center">
                                            <p className="text-lg align-center mr-1">Imagem</p>
                                            <p className="text-md text-quickSilver mt-0.5">
                                                (copie e cole aqui o link da imagem postada no
                                                imgBB)
                                            </p>
                                        </div>
                                        <input
                                            type="text"
                                            maxLength="300"
                                            className="border-b-2 border-eireBlack outline-none w-full"
                                            defaultValue={
                                                this.state.loaded
                                                    ? prodToBeUpdated.data[0].imagem
                                                    : ""
                                            }
                                            onChange={e =>
                                                e.target.value != prodToBeUpdated.data[0].imagem
                                                    ? this.setState({ imgProd: e.target.value })
                                                    : this.setState({
                                                          imgProd: prodToBeUpdated.data[0].imagem,
                                                      })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </container>

                        <div className="flex flex-col w-96 mx-auto">
                            <p>Descrição</p>
                            <input
                                type="text"
                                maxLength="150"
                                className="border-b-2 border-eireBlack outline-none"
                                defaultValue={
                                    this.state.loaded ? prodToBeUpdated.data[0].descricao : ""
                                }
                                onChange={e =>
                                    e != prodToBeUpdated.data[0].descricao
                                        ? this.setState({ descricao: e.target.value })
                                        : this.setState({
                                              descricao: prodToBeUpdated.data[0].descricao,
                                          })
                                }
                            />
                        </div>

                        <div className="w-max mx-auto my-4" onClick={doUpdate}>
                            <input type="submit" className="py-1 px-2 mt-4 mx-auto" />
                        </div>
                    </div>
                </main>
            </>
        );
    }
}
