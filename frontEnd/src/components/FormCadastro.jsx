import React, { useState } from "react";
import logoSVG from "../img/logoSVG.svg";
import * as RiIcons from "react-icons/ri";
import api from "./API/api";

function FormCadastro() {
    //logical states
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [datanasc, setDatanasc] = useState("");
    const [endereco, setEndereco] = useState("");
    const [tipoConta, setTipoConta] = useState("");
    const [photo, setPhoto] = useState("");
    const [celular, setCelular] = useState("");
    const [rg, setrg] = useState("");
    const [cpf, setcpf] = useState("");

    const [passwordShow, setpasswordShow] = useState(false);

    const register = () => {
        console.log(`${email},${nome}, ${password}`);

        if (password === passwordConf) {
            api.post("/api/register", {
                email: email,
                senha: password,
                nome: nome,
                datanasc: datanasc,
                endereco: endereco,
                perfil: tipoConta,
                foto: photo,
                cpf: cpf,
                rg: rg,
                cel: celular,
                tipoCadastro: tipoConta,
            }).then(response => {
                console.log(response);
            });
        } else {
            alert("As senhas informadas não são iguais, reveja a senha e tente novamente");
        }
    };

    const togglePasswordShow = () => {
        setpasswordShow(passwordShow ? false : true);
    };
    return (
        <main className="flex bg-cultured">
            <article className="z-40 shadow-2xl w-screen h-full pb-4 flex flex-col align-center justify-center md:w-halfScreen">
                <a href="/">
                    <img
                        src={logoSVG}
                        className="flex w-40 h-40 mx-auto md:none md:h-0"
                        alt="Logo Drip restés"
                    />
                </a>
                <h1 className="text-2xl font-bold tracking-wider mx-auto mt-6 align-center">
                    Cadastro
                </h1>

                <div
                    className="rounded-3xl border-4 min-w-max w-3/4 bg-cultured mt-8 flex flex-col shadow-xl p-4 m-auto border-dCultured h-maxC
          xl:w-2/4
          "
                >
                    <label htmlFor="user" className="font-semibold text-xl tracking-wider py-2">
                        Insira seu e-mail
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="outline-none border-2 rounded-xl border-eireBlack w-12/12 mx-4 leading-8 px-4 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
                        onChange={e => setEmail(e.target.value)}
                        maxLength="150"
                    />

                    <label htmlFor="password" className="font-semibold text-xl tracking-wider py-2">
                        insira sua senha
                    </label>
                    <div className="w-12/12 flex mx-4 ">
                        <input
                            type={passwordShow ? "text" : "password"}
                            name="password"
                            className="outline-none border-2 border-eireBlack leading-8 px-2 rounded-xl w-11/12 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
                            onChange={e => setPassword(e.target.value)}
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

                    <label htmlFor="password" className="font-semibold text-xl tracking-wider py-2">
                        Confirme sua senha
                    </label>
                    <div className="w-12/12 flex mx-4 ">
                        <input
                            type={passwordShow ? "text" : "password"}
                            name="password"
                            className="outline-none border-2 border-eireBlack leading-8 px-2 rounded-xl w-11/12 transition duration-150 ease-out
                            focus:border-myrtleGreen focus:shadow-green"
                            onChange={e => setPasswordConf(e.target.value)}
                            required="required"
                        />
                    </div>

                    <label htmlFor="nome" className="font-semibold text-xl tracking-wider py-2">
                        Insira seu nome completo
                    </label>
                    <input
                        type="text"
                        name="nome"
                        className="outline-none border-2 rounded-xl border-eireBlack w-12/12 mx-4 leading-8 px-4 transition duration-150 ease-out
                        focus:border-myrtleGreen focus:shadow-green"
                        required="required"
                        onChange={e => setNome(e.target.value)}
                    />

                    <label htmlFor="dataNasc" className="font-semibold text-xl tracking-wider py-2">
                        Data de nascimento
                    </label>
                    <input
                        type="text"
                        name="dataNasc"
                        className="outline-none border-2 rounded-xl border-eireBlack w-12/12 mx-4 leading-8 px-4 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
                        placeholder="ex.: 16/06/2002"
                        required="required"
                        maxLength="16"
                        onChange={e => setDatanasc(e.target.value)}
                    />

                    <label className="font-semibold text-xl tracking-wider py-2">Celular</label>
                    <input
                        type="text"
                        name="dataNasc"
                        className="outline-none border-2 rounded-xl border-eireBlack w-12/12 mx-4 leading-8 px-4 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
                        placeholder="ex.: 16/06/2002"
                        required="required"
                        onChange={e => setCelular(e.target.value)}
                        maxLength="16"
                    />

                    <div className="grid grid-cols-2">
                        <div className="flex flex-col">
                            <label className="font-semibold text-xl tracking-wider py-2">
                                Número do RG
                            </label>
                            <input
                                type="text"
                                name="dataNasc"
                                className="outline-none border-2 rounded-xl border-eireBlack w-52 mx-4 leading-8 px-4 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
                                placeholder="ex.: 16/06/2002"
                                required="required"
                                onChange={e => setrg(e.target.value)}
                                maxLength="14"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-semibold text-xl tracking-wider py-2">
                                Número do CPF
                            </label>
                            <input
                                type="text"
                                name="dataNasc"
                                className="outline-none border-2 rounded-xl border-eireBlack w-52 mx-4 leading-8 px-4 transition duration-150 ease-out
          focus:border-myrtleGreen focus:shadow-green"
                                placeholder="ex.: 16/06/2002"
                                required="required"
                                onChange={e => setcpf(e.target.value)}
                                maxLength="16"
                            />
                        </div>
                    </div>

                    <label htmlFor="dataNasc" className="font-semibold text-xl tracking-wider py-2">
                        Insira seu endereço
                    </label>
                    <input
                        type="text"
                        name="dataNasc"
                        className="outline-none border-2 rounded-xl border-eireBlack w-12/12 mx-4 leading-8 px-4 transition duration-150 ease-out
                        focus:border-myrtleGreen focus:shadow-green"
                        placeholder="ex.: Rua de exemplo n°11 - Jd. dos Exemplos - São Paulo/SP"
                        required="required"
                        onChange={e => setEndereco(e.target.value)}
                        maxLength="150"
                    />

                    <label className="font-semibold text-xl tracking-wider py-2">
                        Insira o link com uma foto de perfil
                    </label>
                    <input
                        type="text"
                        className="outline-none border-2 rounded-xl border-eireBlack w-12/12 mx-4 leading-8 px-4 transition duration-150 ease-out
                        focus:border-myrtleGreen focus:shadow-green"
                        placeholder="copie o link da sua imagem postada no imgbb ou outro serviço online"
                        required="required"
                        maxLength="300"
                        onChange={e => setPhoto(e.target.value)}
                    />

                    <label className="font-semibold text-xl tracking-wider py-2">
                        Selecione o tipo de conta
                    </label>
                    <select
                        name="tipoDeConta"
                        id="tipoDeConta"
                        className="w-11/12 mx-auto border-4 rounded-xl py-1 px-2 border-eireBlack outline-none bg-cultured active:border-myrtileGreen"
                        onChange={e => {
                            setTipoConta(e.target.value);
                            console.log(e.target.value);
                        }}
                        required="required"
                    >
                        <option value=""></option>
                        <option value="c">Desejo só comprar</option>
                        <option value="v">Desejo vender</option>
                    </select>

                    <button
                        className="
                          w-max mt-8 mt-4 mx-auto p-2 border-4 outline-none rounded-lg border-richDBlue transition duration-200 ease-in-out font-semibold 
                          hover:border-maximumBlue hover:text-myrtleGreen hover:shadow-lg"
                        onClick={register}
                    >
                        Efetuar cadastro
                    </button>
                </div>
            </article>

            <article
                className="z-0 bg-cultured w-40v h-screen hidden align-center justify-center
      md:flex"
            >
                <a href="/" className="m-auto">
                    <img src={logoSVG} alt="" className="w-80 h-80 justify-center lg:w-80 h-80" />
                </a>
            </article>
        </main>
    );
}

export default FormCadastro;
