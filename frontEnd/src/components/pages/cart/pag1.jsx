import React from "react";
import { ReactComponent as Logo } from "../../../img/logoSVG.svg";
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";
import { CartContext, cContext } from "../../context/CartContext";
import api from "../../API/api";
import { useParams, history, useHistory } from "react-router";

export default function Finalizacao() {
    const initialSt = [];

    const [cart, setCart] = React.useContext(cContext);
    const [Data, setData] = React.useState(initialSt);
    const [payment, setPayment] = React.useState(initialSt);
    const [loaded, setLoaded] = React.useState(false);

    const id = useParams("idComprador");

    const fetchPagForm = id => {
        api.get(`/api/formasPag/${id}`).then(resp => {
            setPayment(resp);
            setLoaded(true);
        });
    };

    const fetchCliente = id => {
        api.get(`/api/pageCliente/${id}`).then(resp => {
            setData(resp);
        });
    };

    let acumulador = 0;
    const preco = cart.preco;
    acumulador += preco;

    React.useEffect(() => {
        fetchCliente(id.idComprador);
        fetchPagForm(id.idComprador);
        //eslint-disable-next-line
    }, [id.idComprador]);

    const history = useHistory();

    async function buy() {

        await api
            .post(`/sellAction`, {
                valortotal: cart.preco,
                vendId: cart.vendedor,
                prodId: cart.id,
                cliente_id: id.idComprador,
            })
            .then(resp => {
                alert("Compra realizada com sucesso");
                history.push("/sucesso");
            });
    }

    if (loaded) {
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
                            <h2 className="text-xl mb-4 font-bold tracking-wide">Seu endereço</h2>
                            {/* seleciona endereço */}
                            <div className="container lg:mr-4">
                                <div className="flex flex-row align-center justify-center border-4 border-eireBlack w-max my-2 px-4 py-2 rounded-xl transition duration-150 ease-in hover:border-maximumBlue">
                                    <label>{Data.data[0].endereco_cliente}</label>
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

                            <div className="container my-4 flex flex-row w-9/12 mx-auto grid grid-cols-2 ">
                                <div className="flex flex-row border-4 border-eireBlack w-12/12 p-1 rounded-xl mx-2 transition duration-300 ease-in-out m-2 divide-x-2 divide-eireBlack hover:border-myrtleGreen">
                                    {payment > 0 ? (
                                        payment.map(pay => (
                                            <>
                                                <input
                                                    type="radio"
                                                    name="formaPag"
                                                    value={pay.formaPagId}
                                                    className="w-4 h-4 my-auto mx-4"
                                                />

                                                <div className="flex flex-col">
                                                    <p className="ml-2">{pay.numeroCard}</p>
                                                    <div className="flex flex-row ml-2">
                                                        {pay.bandeira == 1 ? (
                                                            <SiIcons.SiMastercard className="w-9 h-9" />
                                                        ) : (
                                                            <SiIcons.SiVisa className="w-9 h-9" />
                                                        )}
                                                        <p className="my-auto mx-2">
                                                            {pay.dataVencimento}
                                                        </p>
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    ) : (
                                        <>
                                            {" "}
                                            <p>
                                                Não existe nenhuma forma de pagamento, se desejar
                                                pague com o boleto bancário
                                            </p>{" "}
                                        </>
                                    )}
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
                                <h2 className="text-xl font-medium">Produtos no carrinho</h2>

                                <ul className="my-4">
                                    <li key={cart.id}>1x- {cart.nome}</li>
                                </ul>

                                <h2>R$ {acumulador},00</h2>

                                <div className="flex h-full">
                                    <button
                                        className="my-2 mx-auto h-12 py-1 px-3 border-4 border-cultured bg-cultured rounded-xl transition duration-200 ease-out
                                    hover:border-maximumBlue hover:bg-maximumBlue hover:text-cultured
                                    "
                                        onClick={buy}
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
    } else {
        return (
            <>
                <h1>Carregando...</h1>
            </>
        );
    }
}
