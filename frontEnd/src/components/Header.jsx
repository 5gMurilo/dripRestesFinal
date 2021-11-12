import { ReactComponent as Logo } from "../img/logoSVG.svg";
import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./Menu";
import { Link } from "react-router-dom";

const Header = _ => {
    const [sidebar, setsidebar] = useState(false);
    const [searchbar, setsearchbar] = useState(false);

    const [prodName, setprodName] = useState("");

    let url = "";

    if (prodName !== "") {
        url = `/searchProduct/${prodName}`;
    } else {
        url = `/shopAll`;
    }

    const classe = sidebar
        ? /* se true */ "block fixed top-0 inset-y-0 right-0 transform translate-x-0 bg-cultured w-100 border-l-2 border-eireBlack justify-center items-center text-center h-full transition duration-300 ease-in-out md:w-100 2xl:w-3/12"
        : /* se false */ "block fixed top-0 inset-y-0 right-0 transform translate-x-full bg-cultured w-80 border-l-2 border-eireBlack justify-center items-center text-center h-full transition duration-300 ease-in-out lg:w-80 2xl:w-3/12";

    const searchClass = searchbar
        ? /* se true */ "block fixed top-0 inset-y-0 right-0 transform translate-x-0 bg-cultured w-80 border-l-2 border-eireBlack justify-center items-center text-center h-full transition duration-300 ease-in-out md:w-100 2xl:w-3/12"
        : /* se false */ "block fixed top-0 inset-y-0 right-0 transform translate-x-full bg-cultured w-80 border-l-2 border-eireBlack justify-center items-center text-center h-full transition duration-300 ease-in-out lg:w-80 2xl:w-3/12";

    const storage = JSON.parse(localStorage.getItem('userData'));
    const storage2 = JSON.parse(localStorage.getItem('sellerData'));

    let user = [];
    let seller = [];

    if (storage) {
        user = storage[0];
        console.log(user);
    }else if(storage2){
        seller = storage2.session[0];
        console.log(seller);
    }else{ 
        console.log('não tem sessão nenhuma');
    }

    if (storage) {
        return (
            <>
                <header
                    className="w-full bg-cultured h-auto z-30 flex justify-center items-center 
                    sm:justify-center sm:mx-auto"
                >
                    <a
                        href="/"
                        className="order-2 w-auto h-36 mx-10
                        sm:order-2 sm:mr-FleftTright3 sm:ml-FleftTright3
                        lg:mr-FleftTright2 lg:order-first lg:ml-10 lg:mr-0
                        2xl:mr-FleftTright"
                    >
                        <Logo
                            className=" w-32 h-32 my-auto
                            sm:order-2 
                            lg:mr-FleftTright2 lg:order-first
                            2xl:mr-FleftTright"
                        />
                    </a>

                    {/* menu */}
                    <button
                        className="w-1/6 order-last transition duration-150 hover:text-maximumBlue"
                        onClick={() => setsidebar(true)}
                    >
                        <HiIcons.HiMenuAlt3
                            className="w-8 h-8 mx-6 
                            md:mx-6"
                        />
                    </button>

                    {/* pesquisar */}
                    <button
                        className="order-1 transition duration-150 hover:text-maximumBlue 
                        lg:order-2"
                        onClick={() => setsearchbar(true)}
                    >
                        <BsIcons.BsSearch
                            className="w-8 h-8 mx-6
                            md:mx-6"
                        />
                    </button>
                </header>

                {/*menu*/}
                <nav className={classe}>
                    <div className="flex align-center justify-center m-auto w-100 h-auto my-10">
                        <BiIcons.BiUser
                            className="w-12 h-auto mr-2 
                            md:w-14 md:mr-4 "
                        />

                        <div className='w-52'>
                            <p>Olá {user.nome_cliente}</p>
                            <Link to={`/myPage/${user.cliente_id}`}><p className='underline'>Clique aqui para acessar seu perfil</p></Link>
                        </div>
                        
                        <button
                            className="mx-10 lg:mx-0 lg:ml-10"
                            onClick={() => setsidebar(false)}
                        >
                            <AiIcons.AiOutlineClose
                                className="
                                w-10 h-10 transition ease-in-out duration-200 
                                md:w-10 md:h-10
                                hover:text-red600"
                            />
                        </button>
                    </div>
                    <ul className="divide-y divide-quickSilver ">
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className="text-base py-6 lg:text-2xl">
                                    <Link to={item.path} onClick={() => setsidebar(false)}>
                                        <span className="transition duration-200 font-medium hover:text-maximumBlue ">
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Search Bar */}
                <div className={searchClass}>
                    <div className="container w-full px-2 flex flex-col mt-4">
                        <div className="flex flex-row align-center mb-4">
                            <p className="text-2xl text-justify my-auto">Pesquise por um produto</p>

                            <button
                                type="button"
                                onClick={() => setsearchbar(false)}
                                className="float-right w-10 h-10 my-auto transition duration-200 hover:text-red600 ml-16"
                            >
                                <BsIcons.BsX className="w-10 h-10" />
                            </button>
                        </div>

                        <div className="flex flex-row content-center">
                            <input
                                type="text"
                                placeholder="Ex.: Nike shox"
                                className="w-10/12 h-8 outline-none border-4 border-eireBlack px-1 rounded-xl mr-2 transition duration-300 ease-in focus:border-maximumBlue"
                                onChange={e => {
                                    setprodName(e.target.value);
                                }}
                            />
                            <button className="w-8 h-8 transition duration-150 ease-in hover:text-myrtleGreen">
                                <Link to={url}>
                                    <BsIcons.BsSearch
                                        className="w-8 h-8"
                                        onClick={() => setsearchbar(false)}
                                    />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if(storage2){
        return (
            <>
                <header
                    className="w-full bg-cultured h-auto z-30 flex justify-center items-center 
                    sm:justify-center sm:mx-auto"
                >
                    <a
                        href="/"
                        className="order-2 w-auto h-36 mx-10
                        sm:order-2 sm:mr-FleftTright3 sm:ml-FleftTright3
                        lg:mr-FleftTright2 lg:order-first lg:ml-10 lg:mr-0
                        2xl:mr-FleftTright"
                    >
                        <Logo
                            className=" w-32 h-32 my-auto
                            sm:order-2 
                            lg:mr-FleftTright2 lg:order-first
                            2xl:mr-FleftTright"
                        />
                    </a>

                    {/* menu */}
                    <button
                        className="w-1/6 order-last transition duration-150 hover:text-maximumBlue"
                        onClick={() => setsidebar(true)}
                    >
                        <HiIcons.HiMenuAlt3
                            className="w-8 h-8 mx-6 
                            md:mx-6"
                        />
                    </button>

                    {/* pesquisar */}
                    <button
                        className="order-1 transition duration-150 hover:text-maximumBlue 
                        lg:order-2"
                        onClick={() => setsearchbar(true)}
                    >
                        <BsIcons.BsSearch
                            className="w-8 h-8 mx-6
                            md:mx-6"
                        />
                    </button>
                </header>

                {/*menu*/}
                <nav className={classe}>
                    <div className="flex align-center justify-center m-auto w-100 h-auto my-10">
                        <BiIcons.BiUser
                            className="w-12 h-auto mr-2 
                            md:w-14 md:mr-4 "
                        />

                        <label>Olá {seller.nome_vendedor}</label>

                        <button
                            className="mx-10 lg:mx-0 lg:ml-10"
                            onClick={() => setsidebar(false)}
                        >
                            <AiIcons.AiOutlineClose
                                className="
                                w-10 h-10 transition ease-in-out duration-200 
                                md:w-10 md:h-10
                                hover:text-red600"
                            />
                        </button>
                    </div>
                    <ul className="divide-y divide-quickSilver ">
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className="text-base py-6 lg:text-2xl">
                                    <Link to={item.path} onClick={() => setsidebar(false)}>
                                        <span className="transition duration-200 font-medium hover:text-maximumBlue ">
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Search Bar */}
                <div className={searchClass}>
                    <div className="container w-full px-2 flex flex-col mt-4">
                        <div className="flex flex-row align-center mb-4">
                            <p className="text-2xl text-justify my-auto">Pesquise por um produto</p>

                            <button
                                type="button"
                                onClick={() => setsearchbar(false)}
                                className="float-right w-10 h-10 my-auto transition duration-200 hover:text-red600 ml-16"
                            >
                                <BsIcons.BsX className="w-10 h-10" />
                            </button>
                        </div>

                        <div className="flex flex-row content-center">
                            <input
                                type="text"
                                placeholder="Ex.: Nike shox"
                                className="w-10/12 h-8 outline-none border-4 border-eireBlack px-1 rounded-xl mr-2 transition duration-300 ease-in focus:border-maximumBlue"
                                onChange={e => {
                                    setprodName(e.target.value);
                                }}
                            />
                            <button className="w-8 h-8 transition duration-150 ease-in hover:text-myrtleGreen">
                                <Link to={url}>
                                    <BsIcons.BsSearch
                                        className="w-8 h-8"
                                        onClick={() => setsearchbar(false)}
                                    />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }else {
        return (
            <>
                <header
                    className="w-full bg-cultured h-auto z-30 flex justify-center items-center 
                    sm:justify-center sm:mx-auto"
                >
                    <a
                        href="/"
                        className="order-2 w-auto h-36 mx-10
                        sm:order-2 sm:mr-FleftTright3 sm:ml-FleftTright3
                        lg:mr-FleftTright2 lg:order-first lg:ml-10 lg:mr-0
                        2xl:mr-FleftTright"
                    >
                        <Logo
                            className=" w-32 h-32 my-auto
                            sm:order-2 
                            lg:mr-FleftTright2 lg:order-first
                            2xl:mr-FleftTright"
                        />
                    </a>

                    {/* menu */}
                    <button
                        className="w-1/6 order-last transition duration-150 hover:text-maximumBlue"
                        onClick={() => setsidebar(true)}
                    >
                        <HiIcons.HiMenuAlt3
                            className="w-8 h-8 mx-6 
                            md:mx-6"
                        />
                    </button>

                    {/* pesquisar */}
                    <button
                        className="order-1 transition duration-150 hover:text-maximumBlue 
                        lg:order-2"
                        onClick={() => setsearchbar(true)}
                    >
                        <BsIcons.BsSearch
                            className="w-8 h-8 mx-6
                            md:mx-6"
                        />
                    </button>
                </header>

                {/*menu*/}
                <nav className={classe}>
                    <div className="flex align-center justify-center m-auto w-100 h-auto my-10">
                        <BiIcons.BiUser
                            className="w-12 h-auto mr-2 
                            md:w-14 md:mr-4 "
                        />

                        <button
                            className="border-2 rounded-md h-8 w-16 border-eireBlack mx-2 my-auto transition ease-in-out duration-150 font-semibold 
                            md:h-10 md:w-20 md:mx-4 md:border-4 md:h-10
                            hover:border-myrtleGreen hover:text-myrtleGreen"
                        >
                            <Link to="/Login">Login</Link>
                        </button>

                        <button
                            className="border-2 rounded-md h-8 w-16 border-eireBlack text-sm mx-2 my-auto transition ease-in-out duration-200 text-cultured bg-eireBlack font-semibold
                            md:border-4 md:w-20 md:mx-4 md:border-4 md:h-10 md:text-base
                            hover:border-myrtleGreen hover:bg-myrtleGreen"
                        >
                            <Link to="/Cadastro">Cadastro</Link>
                        </button>

                        <button
                            className="mx-10 lg:mx-0 lg:ml-10"
                            onClick={() => setsidebar(false)}
                        >
                            <AiIcons.AiOutlineClose
                                className="
                                w-10 h-10 transition ease-in-out duration-200 
                                md:w-10 md:h-10
                                hover:text-red600"
                            />
                        </button>
                    </div>
                    <ul className="divide-y divide-quickSilver ">
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className="text-base py-6 lg:text-2xl">
                                    <Link to={item.path} onClick={() => setsidebar(false)}>
                                        <span className="transition duration-200 font-medium hover:text-maximumBlue ">
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Search Bar */}
                <div className={searchClass}>
                    <div className="container w-full px-2 flex flex-col mt-4">
                        <div className="flex flex-row align-center mb-4">
                            <p className="text-2xl text-justify my-auto">Pesquise por um produto</p>

                            <button
                                type="button"
                                onClick={() => setsearchbar(false)}
                                className="float-right w-10 h-10 my-auto transition duration-200 hover:text-red600 ml-16"
                            >
                                <BsIcons.BsX className="w-10 h-10" />
                            </button>
                        </div>

                        <div className="flex flex-row content-center">
                            <input
                                type="text"
                                placeholder="Ex.: Nike shox"
                                className="w-10/12 h-8 outline-none border-4 border-eireBlack px-1 rounded-xl mr-2 transition duration-300 ease-in focus:border-maximumBlue"
                                onChange={e => {
                                    setprodName(e.target.value);
                                }}
                            />
                            <button className="w-8 h-8 transition duration-150 ease-in hover:text-myrtleGreen">
                                <Link to={url}>
                                    <BsIcons.BsSearch
                                        className="w-8 h-8"
                                        onClick={() => setsearchbar(false)}
                                    />
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Header;
