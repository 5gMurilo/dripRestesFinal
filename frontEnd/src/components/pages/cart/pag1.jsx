import React from "react";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";

export default function Finalizacao() {
    return (
        <div>
            <header className="h-auto w-full shadow-lg mb-10 border-b-2 border-dCultured">
                <Logo className="w-28 h-28 mx-auto my-2" />
            </header>

            <main className="w-11/12 mx-auto">
                <h1 className="text-2xl tracking-wide font-bold mx-auto w-max mb-10">
                    Finalização de compra
                </h1>

                <div
                    className="container divide-black border-4 rounded-xl border-cultured py-4 px-4 mx-auto flex flex-col 
                    sm:divide-y-2
                    lg:flex-row lg:divide-y-0 lg:divide-x-2"
                >
                    <div className="flex flex-col mb-4">
                        <h2 className="text-xl mb-4 font-bold tracking-wide">
                            Selecione seu endereço
                        </h2>
                        {/* seleciona endereço */}
                        <div className="container lg:mr-4">
                            <div className="flex flex-row align-center justify-center border-4 border-eireBlack w-max my-2 px-4 py-2 rounded-xl transition duration-150 ease-in hover:border-maximumBlue">
                                <input
                                    type="radio"
                                    value="1"
                                    name="endereco"
                                    className="my-auto mx-2"
                                />
                                <label>
                                    Rua Mendanha, 953 - Jardim Carolina - São
                                    Paulo/sp
                                </label>
                            </div>

                            <div className="flex flex-row align-center justify-center border-4 border-eireBlack w-max my-2 px-4 py-2 rounded-xl transition duration-150 ease-in hover:border-maximumBlue">
                                <input
                                    type="radio"
                                    value="1"
                                    name="endereco"
                                    className="my-auto mx-2"
                                />
                                <label>
                                    Rua Mendanha, 953 - Jardim Carolina - São
                                    Paulo/sp
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-7/12 px-2">
                        <h2
                            className="text-xl mt-4 mb-4 font-bold tracking-wide 
                        lg:mt-0 lg:ml-4
                        "
                        >
                            Selecione a forma de pagamento
                        </h2>

                        <div
                            className="container my-4 flex flex-row w-9/12 mx-auto grid grid-cols-2
                        "
                        >
                            <div className="flex flex-row border-4 border-eireBlack w-12/12 p-1 rounded-xl mx-2 transition duration-300 ease-in-out m-2 divide-x-2 divide-eireBlack hover:border-myrtleGreen">
                                <input
                                    type="radio"
                                    name="formaPag"
                                    value="1"
                                    className="w-4 h-4 my-auto mx-4"
                                />

                                <div className="flex flex-col">
                                    <p className='ml-2'>5302 6943 6050 6244</p>
                                    <div className="flex flex-row ml-2">
                                        <SiIcons.SiMastercard className="w-9 h-9" />
                                        <p className="my-auto mx-2">
                                            02/04/2022
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row border-4 border-eireBlack w-12/12 p-1 rounded-xl mx-2 transition duration-300 ease-in-out m-2 divide-x-2 divide-eireBlack hover:border-myrtleGreen">
                                <input
                                    type="radio"
                                    name="formaPag"
                                    value="1"
                                    className="w-4 h-4 my-auto mx-4"
                                />

                                <div className="flex flex-col ml-2">
                                    <p className='ml-2'>4532 6096 6320 9002</p>
                                    <div className="flex flex-row ml-2">
                                        <SiIcons.SiVisa className="w-9 h-9" />
                                        <p className="my-auto mx-2">
                                            02/12/2022
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row border-4 border-eireBlack w-12/12 p-1 rounded-xl mx-2 transition duration-300 ease-in-out m-2 divide-x-2 divide-eireBlack hover:border-myrtleGreen ">
                                <input
                                    type="radio"
                                    name="formaPag"
                                    value="1"
                                    className="w-4 h-4 my-auto mx-4"
                                />

                                <div className="flex flex-col w-max">
                                    <p className="ml-2">Boleto Bancário</p>
                                    <div className="flex flex-row">
                                        <BiIcons.BiBarcodeReader className="w-9 h-9 mx-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container w-4/12">
                        <div className="container ml-2 bg-lightGray shadow-lg p-2 h-full divide-y-2 divide-black">
                            <h2 className='text-xl font-medium'>Produtos no carrinho</h2>

                            <ul className="my-4">
                                <li>1x Balenciaga Triple S 'clear sole' </li>
                                <li>2x Pack de meias Stance </li>
                                <li>
                                    1x Helmut Lang Recycled Hoodie 'Coastal Fog'{" "}
                                </li>
                                <li>1x Air Jordan 4 Retro 'Lightning' 2021 </li>
                            </ul>

                            <div className="flex h-full">
                                <button
                                    className="my-2 mx-auto h-12 py-1 px-3 border-4 border-cultured bg-cultured rounded-xl transition duration-200 ease-out
                                hover:border-maximumBlue hover:bg-maximumBlue hover:text-cultured
                                "
                                >
                                    Finalizar compra
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
