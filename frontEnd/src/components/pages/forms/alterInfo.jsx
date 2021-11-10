import React, { Component } from "react";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";

export default class alterInfo extends Component {
    render() {
        return (
            <>
                <header className="w-full h-auto py-2 flex align-center shadow-xl mb-10">
                    <Logo className=" w-32 h-32 align-center tex-center flex mx-auto" />
                </header>

                <h1 className="w-2/5 h-auto text-center align-center justify-center mx-auto font-bold text-2xl">
                    Alterar dados
                </h1>

                <h3 className="w-2/5 h-auto text-center align-center justify-center mx-auto font-bold text-lg text-quickSilver">
                    Carregamos as informações do seu perfil, altere apenas aquelas que desejar, não
                    é necessário alterar as que estão corretas e nem apagá-las
                </h3>

                <form className="w-3/5 h-auto flex flex-col mx-auto py-4">
                    <div className="flex flex-row">
                        <div className="flex flex-col w-5/6 mx-auto">
                            <p className="w-4/12 font-semibold text-lg mx-2">Nome completo</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">E-mail</p>
                            <input
                                type="email"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">RG</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                            />
                        </div>

                        <div className="flex flex-col w-5/6 mx-auto">
                            <p className="w-4/12 font-semibold text-lg mx-2">CPF</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">Endereço</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                            />

                            <p className="w-4/12 font-semibold text-lg mx-2">Celular</p>
                            <input
                                type="text"
                                className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"
                            />
                        </div>
                    </div>

                    <div className='flex flex-col mb-4'>
                        <p className="w-max font-semibold text-lg mx-auto mt-4">Imagem de perfil</p>
                        <input 
                            type="text"
                            className="w-4/6 mx-auto border-b-2 border-eireBlack outline-none"    
                        />
                    </div>

                    <input type="submit" value="Alterar" className='w-2/12 mx-auto border-2 py-1 border-eireBlack rounded-xl'/>
                </form>
            </>
        );
    }
}
