import React from "react";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";

export default function SuccessScreen() {
    return (
        <div className="flex h-screen">
            <div className="flex flex-col align-center justify-center my-auto w-full">
                <div className="h-max flex flex-col align-center my-2">
                    <h1 className="mx-auto text-3xl w-max my-auto font-bold tracking-wider">
                        Obrigado por comprar na
                    </h1>

                    <Logo className="w-44 h-44 mx-auto" />

                    <p className="mx-auto my-auto text-5xl ">😊💙</p>
                </div>

                <button className="mt-10">
                    <a href="/" className="underline text-quickSilver">
                        Voltar para a Home
                    </a>
                </button>
            </div>
        </div>
    );
}
