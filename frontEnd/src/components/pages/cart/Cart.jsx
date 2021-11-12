import React, { useContext } from "react";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";
import CartCards from "./cartCards";
import { CartContext, cContext } from "../../context/CartContext";
import { useHistory } from "react-router";

export default function Cart() {
    const [cart] = useContext(cContext);
    const history = useHistory();

    console.log(cart);

    function realizaCompraStep1() {
        if (localStorage.getItem("userData")) {
            var storage = JSON.parse(localStorage.getItem("userData"));
            // console.log(storage[0].cliente_id);
            history.push(`/finalizacao/${storage[0].cliente_id}`);
        } else {
            alert(
                "Você não está logado, por favor, faça login como um usuário, cadastre uma forma de pagamento se desejar e faça sua compra"
            );
            history.push("/login");
        }
    }

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
                                <li className="my-2 mx-auto">
                                    <CartCards
                                        nomeProduto={cart.nome}
                                        precoProduto={cart.preco}
                                        img={cart.imagem}
                                        size={cart.tamanho}
                                    />
                                </li>
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
                                    <li className="h-auto text-center">
                                        <p className="text-xl font-semibold my-4">
                                            {cart.nome}
                                        </p>
                                    </li>
                                </ul>
                                <hr />
                            </div>

                            <div className="h-auto flex flex-col">
                                <h2 className="text-2xl font-bold tracking-wide text-center mt-2">
                                    Valor dos produtos
                                </h2>

                                <p className="my-2 text-center text-xl font-semibold text-price tracking-widest">
                                    R$ {cart.preco},00
                                </p>
                                <button
                                    className="border-2 border-price w-max px-3 mx-auto my-2 py-1 w-8"
                                    onClick={realizaCompraStep1}
                                >
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
