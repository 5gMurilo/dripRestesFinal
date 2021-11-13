import React from "react";
import Header from "./Header";
import dripWide from "../img/dripWide.png";
import Cards from "./cards";
import api from "./API/api";

export default class Home extends React.Component {
    state = {
        objs: [],
        loaded: false,
    };

    async componentDidMount() {
        const resp = await api.get("/someProds");
        this.setState({ objs: resp.data, loaded: true });
    }

    render() {
        const { objs, loaded } = this.state;

        console.log(objs);

        if (!loaded) {
            return (
                <>
                    <article>
                        <div>
                            <h1>Aguarde...</h1>
                        </div>
                    </article>
                </>
            );
        } else {
            return (
                <>
                    <Header />

                    <div className="w-full h-auto bg flex align-center justify-center">
                        <img src={dripWide} alt="Bem vindo a drip restes" />
                    </div>
                    <article className='w-full'>

                        <h1 className='text-3xl font-bold tracking-wide text-center my-6'>Produtos recentes</h1>

                        <div className="w-full h-auto grid grid-cols-2 align-center md:grid-cols-3 lg:grid-cols-4">
                            {objs.map(item => (
                                <Cards
                                    categoria={item.categoria_id}
                                    length={item.length}
                                    index={item.produto_id}
                                    nomeProduto={item.nome_produto}
                                    id={item.produto_id}
                                    preco={item.preco_produto}
                                    imagem={item.imagem}
                                />
                            ))}
                        </div>
                    </article>
                </>
            );
        }
    }
}
