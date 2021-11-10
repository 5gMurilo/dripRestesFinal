import React, { useState, useContext } from "react";
import logoSVG from "../img/logoSVG.svg";
import * as RiIcons from "react-icons/ri";
import { Context } from "./context/AuthContext";
import Header from "./Header";

export default function FormLogin() {
    const [passwordShow, setpasswordShow] = useState(false);

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const togglePasswordShow = () => {
        setpasswordShow(passwordShow ? false : true);
    };

    // const { handleSellersLogin } = useContext(Context);
    const { handleLogin, handleSellersLogin, resposta } = useContext(Context);
    const [selectLog, setSelectLog] = useState("0");

    var storage = localStorage.getItem("userData");

    const login = () => {
        // 1 -> loding de cliente
        // 2 -> loding de vendedor
        if (selectLog === "1") {
            handleLogin(Email, Password);
        } else if (selectLog === "2") {
            handleSellersLogin(Email, Password);
        } else {
            alert("Selecione a forma de login");
        }
    };

    if (!storage) {
        return (
            <main className="flex ">
                <article
                    className="z-0 bg-cultured w-40v h-screen hidden align-center justify-center shadow-inner 
          md:flex"
                >
                    <a href="/" className="m-auto">
                        <img
                            src={logoSVG}
                            alt=""
                            className="w-80 h-80 justify-center lg:w-80 h-80"
                        />
                    </a>
                </article>
                <article className="z-40 shadow-2xl w-screen h-screen flex flex-col align-center justify-center md:w-halfScreen">
                    <img
                        src={logoSVG}
                        className="flex w-40 h-40 mx-auto md:none md:h-0"
                        alt="Logo Drip restés"
                    />
                    <h1 className="text-2xl font-bold tracking-wider mx-auto mt-24">Login</h1>

                    <div className="rounded-3xl border-4 min-w-max max-w-6xl w-2/4 mt-28 flex flex-col shadow-xl p-4 m-auto border-dCultured">
                        <label htmlFor="user" className="font-semibold text-xl tracking-wider py-2">
                            E-mail
                        </label>
                        <input
                            type="email"
                            name="user"
                            className="outline-none border-2 rounded-xl border-eireBlack w-12/12 mx-4 leading-8 px-4 transition duration-150 ease-out
                focus:border-myrtleGreen focus:shadow-green"
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                        />

                        <label
                            htmlFor="password"
                            className="font-semibold text-xl tracking-wider py-2"
                        >
                            Senha
                        </label>
                        <div className="w-12/12 flex mx-4 ">
                            <input
                                type={passwordShow ? "text" : "password"}
                                name="password"
                                className="outline-none border-2 border-eireBlack leading-8 px-2 rounded-xl w-11/12 transition duration-150 ease-out
                focus:border-myrtleGreen focus:shadow-green"
                                onChange={e => {
                                    setPassword(e.target.value);
                                }}
                            />

                            <i
                                className="
                    mx-2 justify-center align-center my-auto transition duration-100 ease-in
                    hover:text-myrtleGreen
                  "
                                onClick={togglePasswordShow}
                            >
                                <RiIcons.RiEyeFill className="w-6 h-6" />
                            </i>
                        </div>

                        <div>
                            <p>Forma de login</p>
                            <select
                                name="tipoLog"
                                id="tipoLog"
                                onChange={e => setSelectLog(e.target.value)}
                            >
                                <option value="0"></option>
                                <option value="1">Login como cliente</option>
                                <option value="2">Login como vendedor</option>
                            </select>
                        </div>

                        <a
                            href="/Cadastro"
                            className="
                underline text-myrtleGreen mx-auto pt-4 transition duration-150 ease-out 
                hover:text-richDBlue 
                "
                        >
                            Não tem uma conta? Faça seu cadastro clicando aqui!
                        </a>

                        <button
                            className="
                w-max mt-8 mt-4 mx-auto p-2 border-4 outline-none rounded-lg border-richDBlue transition duration-200 ease-in-out font-semibold 
                hover:border-maximumBlue hover:text-myrtleGreen hover:shadow-lg
                "
                            onClick={login}
                        >
                            Efetuar login
                        </button>
                    </div>
                </article>
            </main>
        );
    } else {
        return (
            <>
                <Header />
                <h1>Ta logado</h1>

                <h2>
                    {resposta}
                </h2>
            </>
        );
    }
}
