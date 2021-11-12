import React, {  useContext } from "react";
import { Redirect , useParams } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logoSVG.svg";
import { Context } from "../context/AuthContext";
import api from "../API/api";

const DeleteClient = () => {
    const session = localStorage.getItem("userData");
    const {cliente_id} = useParams();


    const { history } = useContext(Context);

    function clientFunction() {
        api.get(`/deletarCliente/${cliente_id}`).then(resp => {
            alert("sua conta foi deletada com sucesso!");
            localStorage.removeItem("userData");
            history.push("/login");
        });
    }


    if (session) {
        return (
            <>
                <header>
                    <Logo className=" w-32 h-32 align-center tex-center flex mx-auto" />
                </header>

                <main className="w-11/12 mx-auto">
                    <article className="w-10/12 h-auto flex flex-col mx-auto">
                        <h1 className="text-3xl font-bold tracking-wide text-center">
                            Deseja realmente excluir sua conta?
                        </h1>

                        <div className="w-max mx-auto">
                            <button
                                onClick={clientFunction}
                                className="w-20 h-10 m-4 border-4 border-eireBlack transition duration-200 ease-in hover:border-maximumBlue hover:text-maximumBlue"
                            >
                                <p>Sim</p>
                            </button>

                            <button
                                onClick={() => {history.push(`/myPage/${cliente_id}`)}}
                                className="w-20 h-10 m-4 border-4 border-eireBlack transition duration-200 ease-in hover:border-maximumBlue hover:text-maximumBlue"
                            >
                                <p>Não</p>
                            </button>
                        </div>
                    </article>
                </main>
            </>
        );
    } else {
        return <Redirect to="/login" />;
    }
};

export default DeleteClient;
