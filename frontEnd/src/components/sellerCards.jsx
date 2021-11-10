import React from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as Biicons from "react-icons/bi";
import api from "./API/api";

const SellerCards = props => {
    switch (props.categoria) {
        case 1:
            return (
                <article
                    className="w-80 h-auto border-8 border-cultured rounded-3xl mx-auto my-2 text-center
                hover:border-dCultured transition duration-150 ease-in-out
                "
                    key={props.id}
                >
                    <div className="m-auto flex flex-col align-center justify-center">
                        <div className="bg-cat1 rounded-t-xl h-66">
                            <img
                                src={props.imagem}
                                alt="oi ne"
                                className="w-11/12 static my-2 mx-auto shadow-lg"
                            />
                        </div>
                        <div className="h-14 flex flex-wrap content-center my-2 px-2">
                            <h1 className="font-semibold text-xl w-full">{props.nomeProduto}</h1>
                        </div>
                        <p className="font-semibold text-price">R$ {props.preco}</p>

                        <div className='w-44 flex flex-row mx-auto'>
                            <Link to={`/alterProd/${props.id}`} className='w-2/6'>
                                <button className='mx-auto w-2/6 transition duration-200 ease-in hover:text-red600' >
                                    <BsIcons.BsFillPencilFill />
                                </button>
                            </Link>
                            <button
                                className="transition mx-auto w-2/6 duration-200 ease-in hover:text-red600"
                                onClick={() =>
                                    api.get(`/deletarProduto/${props.id}`).then(response => {
                                        console.log(response);
                                    })
                                }
                            >
                                <Biicons.BiTrash />
                            </button>
                        </div>
                    </div>
                </article>
            );
        case 2:
            return (
                <article
                    className="w-80 h-auto border-8 border-cultured rounded-3xl mx-auto my-2 text-center
                hover:border-dCultured transition duration-150 ease-in-out
                "
                    key={props.id}
                >
                    <div className="m-auto flex flex-col align-center justify-center">
                        <div className="bg-cat2 rounded-t-xl h-66">
                            <img
                                src={props.imagem}
                                alt="oi ne"
                                className="w-11/12 static my-2 mx-auto shadow-lg"
                            />
                        </div>
                        <div className="h-14 flex flex-wrap content-center my-2 px-2">
                            <h1 className="font-semibold text-xl w-full">{props.nomeProduto}</h1>
                        </div>
                        <p className="font-semibold text-price">R$ {props.preco}</p>

                        <div className='w-44 flex flex-row mx-auto'>
                            <Link to={`/alterProd/${props.id}`} className='w-2/6'>
                                <button className='mx-auto w-2/6 transition duration-200 ease-in hover:text-red600' >
                                    <BsIcons.BsFillPencilFill />
                                </button>
                            </Link>
                            <button
                                className="transition mx-auto w-2/6 duration-200 ease-in hover:text-red600"
                                onClick={() =>
                                    api.get(`/deletarProduto/${props.id}`).then(response => {
                                        console.log(response);
                                    })
                                }
                            >
                                <Biicons.BiTrash />
                            </button>
                        </div>
                    </div>
                </article>
            );
        case 3:
            return (
                <article
                    className="w-80 h-auto border-8 border-cultured rounded-3xl mx-auto my-2 text-center
                hover:border-dCultured transition duration-150 ease-in-out
                "
                    key={props.index}
                >
                    <div className="m-auto flex flex-col align-center justify-center">
                        <div className="bg-cat3 rounded-t-xl h-66">
                            <img
                                src={props.imagem}
                                alt="oi ne"
                                className="w-11/12 static my-2 mx-auto shadow-lg"
                            />
                        </div>
                        <div className="h-14 flex flex-wrap content-center my-2 px-2">
                            <h1 className="font-semibold text-xl w-full">{props.nomeProduto}</h1>
                        </div>
                        <p className="font-semibold text-price">R$ {props.preco}</p>
                    </div>

                    <div className='w-44 flex flex-row mx-auto'>
                            <Link to={`/alterProd/${props.id}`} className='w-2/6'>
                                <button className='mx-auto w-2/6 transition duration-200 ease-in hover:text-red600' >
                                    <BsIcons.BsFillPencilFill />
                                </button>
                            </Link>
                            <button
                                className="transition mx-auto w-2/6 duration-200 ease-in hover:text-red600"
                                onClick={() =>
                                    api.get(`/deletarProduto/${props.id}`).then(response => {
                                        console.log(response);
                                    })
                                }
                            >
                                <Biicons.BiTrash />
                            </button>
                        </div>
                </article>
            );
        case 4:
            return (
                <article
                    className="w-80 h-auto border-8 border-cultured rounded-3xl mx-auto my-2 text-center
                hover:border-dCultured transition duration-150 ease-in-out
                "
                    key={props.index}
                >
                    <div className="m-auto flex flex-col align-center justify-center">
                        <div className="bg-cat4 rounded-t-xl h-66">
                            <img
                                src={props.imagem}
                                alt="oi ne"
                                className="w-11/12 static my-2 mx-auto shadow-lg"
                            />
                        </div>
                        <div className="h-14 flex flex-wrap content-center my-2 px-2">
                            <h1 className="font-semibold text-xl w-full">{props.nomeProduto}</h1>
                        </div>
                        <p className="font-semibold text-price">R$ {props.preco}</p>
                        <div className='w-44 flex flex-row mx-auto'>
                            <Link to={`/alterProd/${props.id}`} className='w-2/6'>
                                <button className='mx-auto w-2/6 transition duration-200 ease-in hover:text-red600' >
                                    <BsIcons.BsFillPencilFill />
                                </button>
                            </Link>
                            <button
                                className="transition mx-auto w-2/6 duration-200 ease-in hover:text-red600"
                                onClick={() =>
                                    api.get(`/deletarProduto/${props.id}`).then(response => {
                                        console.log(response);
                                    })
                                }
                            >
                                <Biicons.BiTrash />
                            </button>
                        </div>
                    </div>
                </article>
            );
        default:
            return (
                <div>
                    <p>Não foi encontrado nenhum produto nessa categoria...</p>
                </div>
            );
    }
};

export default SellerCards;
