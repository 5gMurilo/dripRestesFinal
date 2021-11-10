import React, { Component } from "react";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";

export default class inserirProd extends Component {
    render() {
        return (
            <>
                <header className="w-full h-auto py-2 flex align-center shadow-xl mb-10">
                    <Logo className=" w-32 h-32 align-center tex-center flex mx-auto" />
                </header>

                <main className="w-11/12 mx-0 py-4 md:mx-auto">
                    <h1 className="text-2xl font-bold tracking-wide mx-auto w-max mb-4">
                        Inserir produto
                    </h1>

                    <form className="w-9/12 mx-auto h-auto divide-eireBlack sm:w-full">
                        <div className='w-4/12 mx-auto'>
                            <label className="text-lg mr-2">Digite o nome do produto</label>
                            <input
                                type="text"
                                className="border-b-2 border-eireBlack outline-none w-full"
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
                                        />
                                    </div>
                                    <div className="m-2">
                                        <p className="text-lg">quantidade</p>
                                        <input
                                            type="number"
                                            className="border-b-2 border-eireBlack outline-none"
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
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col text-center">
                                <label className="text-xl">selecione a categoria do produto</label>
                                <div className="flex flex-row my-2 mx-auto">
                                    <div className="w-28 h-14 border-2 border-eireBlack m-2 text-center">
                                        <p className="text-lg">Tênis</p>
                                        <input type="radio" name="cat" id="cat" value="1" />
                                    </div>
                                    <div className="w-28 h-14 border-2 border-eireBlack m-2 text-center">
                                        <p className="text-lg">Camisetas</p>
                                        <input type="radio" name="cat" id="cat" value="2" />
                                    </div>
                                </div>

                                <div className="flex flex-row my-2 mx-auto">
                                    <div className="w-28 h-14 border-2 border-eireBlack m-2 text-center">
                                        <p className="text-lg">Bottomwear</p>
                                        <input type="radio" name="cat" id="cat" value="4" />
                                    </div>
                                    <div className="w-28 h-14 border-2 border-eireBlack m-2 text-center">
                                        <p className="text-lg">Moletons</p>
                                        <input type="radio" name="cat" id="cat" value="3" />
                                    </div>
                                </div>
                            </div>
                        </container>

                        <div className='flex flex-col w-96 mx-auto'>
                            <p>Descrição</p>
                            <input type="text" maxLength='150' className="border-b-2 border-eireBlack outline-none"/>
                        </div>

                        <div className='w-max mx-auto my-4'>
                            <input type="submit" className="py-1 px-2 mt-4 mx-auto" />
                        </div>
                    </form>
                </main>
            </>
        );
    }
}
