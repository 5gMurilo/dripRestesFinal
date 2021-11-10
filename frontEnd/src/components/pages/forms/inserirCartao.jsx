import React, { Component } from "react";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";
import * as SiIcons from "react-icons/si";

export default class inserirCartao extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numeroCartao: "",
            cvv: "",
            dataVal: "",
            bandeira: 0,
            clienteId: 0,
        };

        this.handleChangeBandeira = this.handleChangeBandeira.bind(this);
        this.handleChangeCardNum = this.handleChangeCardNum.bind(this);
        this.handleChangeCvv = this.handleChangeCvv.bind(this);
        this.handleChangeCardNum = this.handleChangeCardNum.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeCardNum(event) {
        this.setState({ numeroCartao: event.target.value });
    }
    handleChangeCvv(event) {
        this.setState({ cvv: event.target.value });
    }
    handleChangeDataVal(event) {
        this.setState({ dataVal: event.target.value });
    }
    handleChangeBandeira(event) {
        console.log(event.target.value);
        this.setState({ bandeira: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <>
                <header className="w-full h-auto py-2 flex align-center shadow-xl mb-10">
                    <Logo className=" w-32 h-32 align-center tex-center flex mx-auto" />
                </header>

                <div className="w-full flex align-center justify-center flex-col h-auto mx-auto p-2 sm:w-full md:w-5/6">
                    <h1 className="text-2xl font-bold tracking-wide my-2 align-center text-center">
                        Adicionar cartão
                    </h1>

                    <form
                        onSubmit={this.handleSubmit}
                        className="w-full h-auto my-10 flex flex-col mx-auto border-eireBlack rounded-xl py-2 bg-eireBlack
                        lg:w-6/12
                        sm:w-full"
                    >
                        <div className="w-full h-14 bg-gradient-to-r from-grey1 to-grey2 my-2"></div>

                        <div className='mx-4'>
                            <div className="w-full flex flex-row w-full">
                                <div className="flex flex-col w-6/12">
                                    <label className="text-xl mb-2 text-cultured">
                                        Número do cartão
                                    </label>
                                    <input
                                        type="text"
                                        maxLength="20"
                                        className="border-b-2 w-11/12 text-center mx-auto border-quickSilver outline-none text-dCultured bg-eireBlack py-1 px-2 mb-4"
                                        onChange={this.handleChangeCvv}
                                    />
                                </div>

                                <div className="flex flex-col w-6/12">
                                    <label className="text-xl mb-2 text-cultured">CVV</label>
                                    <input
                                        type="number"
                                        maxLength="3"
                                        className="border-b-2 w-11/12 text-center mx-auto border-quickSilver outline-none text-dCultured bg-eireBlack py-1 px-2 mb-4"
                                        onChange={this.handleChangeCardNumd}
                                    />
                                </div>
                            </div>

                            <div className="h-auto flex flex-row mb-10">
                                <div className="w-6/12 h-auto flex flex-col">
                                    <label className="text-xl mb-2 text-cultured">
                                        Data de validade
                                    </label>
                                    <input
                                        type="text"
                                        maxLength="5"
                                        className="border-b-2 w-11/12 text-center mx-auto border-quickSilver outline-none text-dCultured bg-eireBlack py-1 px-2 mb-4"
                                        onChange={this.handleChangeDataVal}
                                    />
                                </div>

                                <div className="flex flex-col w-6/12 align-center">
                                    <div className="h-12 w-12 flex flex-row align-center justify-center mx-auto">
                                        <input
                                            type="radio"
                                            name="bandeira"
                                            id="bandeira"
                                            className="my-auto"
                                            value="2"
                                            onChange={this.handleChangeBandeira}
                                            required={true}
                                        />
                                        <SiIcons.SiMastercard className="w-10 h-10 text-cultured my-auto mx-1" />
                                    </div>
                                    <div className="h-12 w-12 flex flex-row align-center justify-center mx-auto">
                                        <input
                                            type="radio"
                                            name="bandeira"
                                            id="bandeira"
                                            className="my-auto"
                                            value="1"
                                            onChange={this.handleChangeBandeira}
                                            required={true}
                                        />
                                        <SiIcons.SiVisa className="w-10 h-10 text-cultured my-auto mx-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input
                            type="submit"
                            value="Cadastrar cartão"
                            className="my-2 p-1 w-6/12 mx-auto bg-eireBlack text-cultured border-dCultured border-2 rounded-xl transition duration-200 ease-in-out
                        hover:bg-cultured hover:border-cultured hover:text-eireBlack hover:shadow-white
                        "
                        />
                    </form>
                </div>
            </>
        );
    }
}
