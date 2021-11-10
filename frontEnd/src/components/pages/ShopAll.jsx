import React, { Component } from "react";
import api from "../API/api";
import Cards from "../cards";
import Header from "../Header";

export default class shopAll extends Component {
    state = {
        all: [],
    };

    async componentDidMount() {
        const response = await api.get("/api/shopAll");

        this.setState({ all: response.data });
    }

    render() {

        const {all} = this.state;
        console.log('====================================');
        console.log(all);
        console.log('====================================');

        return (
            <>
                <Header />

                <main>
                    <article className="w-full h-auto flex flex-col align-center justify-center pb-20">
                        <h1 className="m-auto py-6 text-2xl font-bold tracking-widest md:text-3xl">
                            ' TODOS OS PRODUTOS '
                        </h1>
                        <h3 className="w-96 mx-auto py-2 tracking-wide font-normal text-center md:w-5/6">
                            Todo o nosso acervo está aqui, não se limite só ao
                            desejo!
                        </h3>
                        <p className="pt-8 pl-10 text-quickSilver">
                            Resultados: {all.length}
                        </p>
                    </article>

                    <article className="grid grid-cols-1 w-12/12 m-auto rounded-xl mb-20 
                    xl:grid-cols-4 xl:w-85
                    lg:grid-cols-3 
                    md:grid-cols-2 md:align-center md:justify-center
                    sm:grid-cols-1
                    ">
                        {all.map((all) => (
                            <Cards
                                categoria={all.categoria_id}
                                length={all.length}
                                index={all.produto_id}
                                nomeProduto={all.nome_produto}
                                id={all.produto_id}
                                preco={all.preco_produto}
                                imagem={all.imagem}
                            />
                        ))}
                    </article>
                </main>
            </>
        );
    }
}
