import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import api from "../API/api";
import Cards from "../cards";
import Header from "../Header";

function Searchprod() {
    const { prodname } = useParams();
    const [obj, setObj] = useState([]);

    const prodName = prodname;
    const [ProdName, setProdName] = useState("");
    let [isLoaded, setIsLoaded] = useState(false);

    const prod = useMemo(() => {
        if (isLoaded) {
            if (prodName !== ProdName) {
                return prodName;
            } else {
                return prodName;
            }
        } else {
            return prodName;
        }
    }, [prodName, ProdName, isLoaded]);

    useEffect(() => {
        fetchContent(prod);
        //eslint-disable-next-line
    }, [prod]);

    function fetchContent(urlvalue) {
        if (urlvalue === "") {
            console.log("opa");
            window.location.href("/");
        } else {
            api.get(`/api/searchprod/${urlvalue}`).then((response) => {
                setProdName(prod);
                setObj(response.data);

                if (obj.length !== 0) {
                    setIsLoaded(true);
                }
            });
        }
    }

    const resposta = obj.resp;
    console.log(resposta);

    if (resposta !== null) {
        if (obj.bool) {
            return (
                <>
                    <Header />

                    <article className="w-full h-44 flex flex-col">
                        <h1 className="mx-auto mt-auto text-4xl">
                            Você procurou por '{prod}'
                        </h1>
                        <h2 className="mx-auto mb-auto text-xl text-quickSilver mt-2">
                            Veja aqui os resultados da sua busca
                        </h2>
                    </article>

                    <article
                        className="grid grid-cols-1 w-12/12 m-auto rounded-xl mb-20 
                        2xl:grid-cols-4 xl:w-85
                        lg:grid-cols-3 
                        md:grid-cols-2 md:align-center md:justify-center
                        sm:grid-cols-1"
                    >
                        {resposta.map((objeto) => (
                            <Cards
                                categoria={objeto.categoria_id}
                                length={objeto.length}
                                index={objeto.produto_id}
                                nomeProduto={objeto.nome_produto}
                                id={objeto.produto_id}
                                preco={objeto.preco_produto}
                                imagem={objeto.imagem}
                            />
                        ))}
                    </article>
                </>
            );
        } else {
            return (
                <>
                    <Header />

                    <article className="w-full h-44 flex flex-col">
                        <h1 className="mx-auto mt-auto text-4xl">
                            Você procurou por '{prod}'
                        </h1>
                        <h2 className="mx-auto mb-auto text-xl text-quickSilver mt-2">
                            Mas não encontramos nada na nossa base de dados ;-
                        </h2>
                    </article>
                </>
            );
        }
    } else {
        return (
            <>
                <Header />

                <article>
                    <h1>Aguarde enquanto realizamos a busca</h1>
                </article>
            </>
        );
    }
}

export default Searchprod;
