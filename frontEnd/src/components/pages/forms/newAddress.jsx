import React, { Component } from 'react'
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";

export default class alterAddress extends Component {
    render() {
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

                        <input
                            type="submit"
                            className="border-2 border-eireBlack w-1/12 mx-auto rounded-xl py-1 mt-10 transition duration-200 hover:border-maximumBlue hover:shadow-lg"
                        />
                    </form>
                </main>   
            </>
        )
    }
}
