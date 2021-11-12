import React, { Component, useContext } from "react";
import Header from "../Header";
import api from "../API/api";
import { cContext } from "../context/CartContext";

class ProductPage extends Component {
    state = {
        objs: [],
        tamanho: "",
    };
    static contextType = cContext;

    async componentDidMount() {
        const id = this.props.match.params.id;
        const response = await api.get(`/api/prod/${id}`);
        this.setState({ objs: response.data });
    }

    handleChange(event) {
        this.setState({ tamanho: event.target.value });
    }


    render() {
        const { objs } = this.state;
        const [cart, setCart] = this.context;        

        const AddCart = _ => {
            const prod = {
                nome: objs[0].nome_produto,
                id: objs[0].produto_id,
                preco: objs[0].preco_produto,
                imagem: objs[0].imagem,
                vendedor: objs[0].vendedor_id, 
            };
            setCart(prod);
            
        };
        return (
            <>
                <Header />

                <main>
                    {objs.map(obj => (
                        <article
                            key={obj.produto_id}
                            className="flex w-10/12 h-auto border border-black mx-auto mt-10 divide-black"
                        >
                            <div className="w-5/12 h-full my-auto">
                                <img
                                    src={obj.imagem}
                                    alt="imagem do produto"
                                    className="w-10/12 h-auto m-8 shadow-lg "
                                />
                            </div>
                            <div>
                                <div className="py-10">
                                    <h1 className="text-3xl font-bold tracking-widest">
                                        {obj.nome_produto}
                                    </h1>
                                    <h3 className="text-xl font-semibold tracking-wide my-8">
                                        R$ {obj.preco_produto}
                                    </h3>
                                </div>

                                <div className="mb-8">
                                    <p>{obj.descricao}</p>
                                </div>

                                <div className="border-4 w-max pr-2">
                                    <select name="" onChange={this.handleChange}>
                                        <option value={obj.tamanho}>{obj.tamanho}</option>
                                    </select>
                                </div>

                                <div className="w-max mx-auto">
                                    <button
                                        className="mx-auto border-2 border-black p-4 transition duration-200 ease-in-out bg-cultured mb-2 hover:border-myrtleGreen hover:shadow-green"
                                        onClick={AddCart}
                                    >
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </main>
            </>
        );
    }
}


export default ProductPage;
