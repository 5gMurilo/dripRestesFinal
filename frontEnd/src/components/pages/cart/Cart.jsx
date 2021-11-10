import React from "react";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";
import CartCards from "./cartCards";
import { Link } from "react-router-dom";

export default class Cart extends React.Component {
    render() {
        const prods = [
            {
                id: 1,
                nome: "Nike shox tl",
                valor: 1200,
                tamanho: "39",
                qtd: 1,
                img: "https://static.wixstatic.com/media/9a3853_c3a4351d4fee4bac9402259c12396d1b~mv2.jpg/v1/fill/w_900,h_589,al_c,q_90/9a3853_c3a4351d4fee4bac9402259c12396d1b~mv2.jpg",
            },
            {
                id: 2,
                nome: "Air jordan 4",
                valor: 3200,
                tamanho: "38",
                qtd: 1,
                img: "https://static.wixstatic.com/media/cc9c78_20cbfb51224b42c080a9fd1e6e850bd2~mv2.jpg/v1/fill/w_1000,h_625,al_c,q_90,usm_0.66_1.00_0.01/cc9c78_20cbfb51224b42c080a9fd1e6e850bd2~mv2.jpg",
            },
        ];

        const finalValue = prods.reduce((acum, atual) => acum + atual.valor, 0);
        return (
            <>
                <header className="w-screen py-2">
                    <a href="/">
                        <Logo className="order-2 w-28 h-28 mx-auto" />
                    </a>
                </header>

                <main className="flex flex-col w-11/12 mx-auto">
                    {/* listagem */}

                    <h1 className="text-3xl font-bold tracking-widest my-4 text-center">
                        Itens no carrinho
                    </h1>

                    <div className="flex flex-row w-11/12 mx-auto">
                        <article className="w-8/12">
                            <div className="w-11/12 h-auto p-2 border-2 rounded-lg border-quicksilver bg-cultured shadow-md mx-auto">
                                <ul className="mx-auto w-11/12  ">
                                    {prods.map(item => (
                                        <li key={item.id} className="my-2 mx-auto">
                                            <CartCards
                                                nomeProduto={item.nome}
                                                precoProduto={item.valor}
                                                img={item.img}
                                                size={item.tamanho}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>

                        {/* dados do carrinho */}
                        <article className="w-3/12 min-h-full">
                            <div className="bg-quicksilver border-2 py-4 px-2 min-h-full">
                                <div className="h-4/6">
                                    <h1 className="mb-2 text-2xl font-bold tracking-wide text-center">
                                        Resumo
                                    </h1>
                                    <hr />
                                    <ul className="mb-4">
                                        {prods.map(item => (
                                            <li key={item.id} className="h-6 text-center">
                                                <p className="text-xl font-semibold my-4">
                                                    1x - {item.nome}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                    <hr />
                                </div>

                                <div className="h-auto flex flex-col">
                                    <h2 className="text-2xl font-bold tracking-wide text-center mt-2">
                                        Valor dos produtos
                                    </h2>

                                    <p className="my-2 text-center text-xl font-semibold text-price tracking-widest">
                                        R$ {finalValue},00
                                    </p>
                                    <button className="border-2 border-price w-max px-3 mx-auto my-2 py-1 w-8">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>
                </main>
            </>
        );
    }
}
