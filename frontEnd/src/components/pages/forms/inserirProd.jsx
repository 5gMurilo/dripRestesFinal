import React, { Component } from "react";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";
import api from "../../API/api";

export default class inserirProd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeProd: "",
            precoProd: 0,
            categoria: 0,
            vendedor: 0,
            qtd: 0,
            descricao: "",
            tamanho: "",
            marca: "",
            image: "",
        };
        
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({categoria: event.target.value});
    }



    render() {
        const { nomeProd, precoProd,categoria, qtd, descricao, tamanho, marca, image } =
            this.state;

        const id = this.props.match.params.vendedor_id;

        let cat = 0;
        
        function inserirProd() {

            if(categoria === "1"){
                cat = 1;
            }else if(categoria === "2"){ 
                cat = 2;
            }else if(categoria === "3"){
                cat = 3;
            }else if(categoria === "4"){
                cat = 4;
            }

            api.post(`/inserirProduto`, {
                nome_produto: nomeProd,
                preco_produto: precoProd,
                categoria_id: categoria,
                vendedor_id: id,
                qtd_estoque: qtd,
                descricao: descricao,
                tamanho: tamanho,
                marca: marca,
                img: image,
            }).then(resp => {
                console.log(resp);
                alert("Dados alterados, volte a página anterior");
            });
        }

        return (
            <>
                <header className="w-full h-auto py-2 flex align-center shadow-xl mb-10">
                    <Logo className=" w-32 h-32 align-center tex-center flex mx-auto" />
                </header>

                <main className="w-11/12 mx-0 py-4 md:mx-auto">
                    <h1 className="text-2xl font-bold tracking-wide mx-auto w-max mb-4">
                        Inserir produto
                    </h1>

                    <div className="w-9/12 mx-auto h-auto divide-eireBlack sm:w-full">
                        <div className="w-4/12 mx-auto">
                            <label className="text-lg mr-2">Digite o nome do produto</label>
                            <input
                                type="text"
                                className="border-b-2 border-eireBlack outline-none w-full"
                                onChange={e => this.setState({ nomeProd: e.target.value })}
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
                                            onChange={e => this.setState({ marca: e.target.value })}
                                        />
                                    </div>
                                    <div className="m-2">
                                        <p className="text-lg">quantidade</p>
                                        <input
                                            type="number"
                                            className="border-b-2 border-eireBlack outline-none"
                                            onChange={e => this.setState({ qtd: e.target.value })}
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
                                            onChange={e =>
                                                this.setState({ precoProd: e.target.value })
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
                                            onChange={e => this.setState({ image: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col text-center">
                                <label className="text-xl">selecione a categoria do produto</label>
                                
                                <select value={this.state.categoria} onChange={this.handleChange
                                }>
                                    <option value='0'></option>
                                    <option value='1'>Tenis</option>
                                    <option value='2'>Camiseta</option>
                                    <option value='3'>Jaquetas e moletons</option>
                                    <option value='4'>bottomwear</option>
                                </select>

                            </div>
                            
                        </container>

                        <div className="flex flex-col w-96 mx-auto">
                            <p>Descrição</p>
                            <input
                                type="text"
                                maxLength="150"
                                className="border-b-2 border-eireBlack outline-none"
                                onChange={e => this.setState({ descricao: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col w-96 mx-auto">
                            <p>Tamanho</p>
                            <input
                                type="text"
                                maxLength="3"
                                className="border-b-2 border-eireBlack outline-none"
                                onChange={e => this.setState({ tamanho: e.target.value })}
                            />
                        </div>

                        <button onClick={inserirProd}>
                            <input type="submit" className="py-1 px-2 mt-4 mx-auto"/>
                        </button>
                    </div>
                </main>
            </>
        );
    }
}
