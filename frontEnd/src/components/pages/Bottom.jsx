import React, { Component } from "react";
import Cards from "../cards";
import Header from "../Header";
import api from "../API/api";

export default class shopAll extends Component {
    state = {
        bottom: [],
    };

    async componentDidMount() {
        const response = await api.get("/api/bottom");

        this.setState({ bottom: response.data });
    }

    render() {
        const { bottom } = this.state;
        console.log("====================================");
        console.log(bottom);
        console.log("====================================");

        return (
            <>
                <Header />

                <main>
                    <article className="w-full h-auto flex flex-col align-center justify-center pb-20">
                        <h1 className="m-auto py-6 text-2xl font-bold tracking-widest md:text-3xl">
                            ' Calças '
                        </h1>
                        <h3 className="w-96 mx-auto py-2 tracking-wide font-normal text-center md:w-5/6">
                            Todo o nosso acervo está aqui, não se limite só ao
                            desejo!
                        </h3>
                        <p className="pt-8 pl-10 text-quickSilver">
                            Resultados: {bottom.length}
                        </p>
                    </article>

                    <article className="grid grid-cols-1 w-12/12 m-auto rounded-xl mb-20 
                    xl:grid-cols-4 lg:w-85
                    lg:grid-cols-3
                    md:grid-cols-2 md:align-center md:justify-center
                    sm:grid-cols-1">
                        {bottom.map((bottom) => (
                            <Cards
                                categoria={bottom.categoria_id}
                                length={bottom.length}
                                index={bottom.produto_id}
                                nomeProduto={bottom.nome_produto}
                                id={bottom.produto_id}
                                preco={bottom.preco_produto}
                                imagem={bottom.imagem}
                            />
                        ))}
                    </article>
                </main>
            </>
        );
    }
}
