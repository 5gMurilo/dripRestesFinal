import React, { Component } from "react";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";

export default class newBankAcc extends Component {
    render() {
        // alert('Preste atenção e revise os dados para que não haja erros no momento da transação');
        return (
            <>
                <header className="w-full h-auto py-2 flex align-center shadow-xl mb-10">
                    <Logo className=" w-32 h-32 align-center tex-center flex mx-auto" />
                </header>

                <main className="w-11/12 mx-auto">
                    <h1 className="text-2xl font-bold tracking-wide text-center mb-10">
                        Nova conta bancária
                    </h1>

                    <form className="w-8/12 mx-auto flex flex-col border border-grey1 py-2">
                        <div className="w-8/12 flex flex-col mx-auto">
                            <label className="text-xl font-medium">
                                Insira o número da conta com o dígito
                            </label>
                            <input
                                type="text"
                                maxLength={15}
                                className="w-8/12 mx-auto border-b-2 border-grey1 outline-none mb-2"
                            />

                            <label className="text-xl font-medium">
                                Insira o número da agência
                            </label>
                            <input
                                type="text"
                                maxLength={4}
                                className="w-8/12 mx-auto border-b-2 border-grey1 outline-none mb-2"
                            />
                        </div>

                        <div className="w-8/12 flex flex-col mx-auto mt-4">
                            <label className="text-xl font-medium mb-2">
                                Selecione um dos bancos válidos abaixo
                            </label>
                            <select
                                name="bancos"
                                id="bancos"
                                className="w-10/12 mx-auto border-2 px-2 border-eireBlack"
                            >
                                <option value="Banco do Brasil">Banco do Brasil</option>
                                <option value="Bradesco">Bradesco</option>
                                <option value="Itaú">Itaú</option>
                                <option value="Santander">Santander</option>
                                <option value="Nubank">Nubank</option>
                                <option value="Inter">Inter</option>
                                <option value="C6 Bank">C6 Bank</option>
                                <option value="Neon">Neon</option>
                                <option value="Next">Next</option>
                            </select>
                        </div>

                        <input
                            type="submit"
                            className="border-2 border-eireBlack w-1/12 mx-auto rounded-xl py-1 mt-10 transition duration-200 hover:border-maximumBlue hover:shadow-lg"
                        />
                    </form>
                </main>
            </>
        );
    }
}
