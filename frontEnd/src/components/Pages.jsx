import React from "react";
import * as rRouters from "react-router-dom";
import Bottom from "./pages/Bottom";
import Top from "./pages/Top";
import Shoes from "./pages/Shoes";
import ShopAll from "./pages/ShopAll";
import Home from "./Home";
import Header from "./Header";
import FormLogin from "./FormLogin";
import FormCadastro from "./FormCadastro";
import Cart from "./pages/cart/Cart";
import ProductPage from "./pages/ProductPage";
import PagCliente from "./pages/pagCliente";
import SellerPage from "./pages/sellerPage";
import Finalizacao from "./pages/cart/pag1";
import SuccesScreen from "./pages/cart/finalizacao";
import Searchprod from "./pages/searchprod";
import { AuthProvider } from "./context/AuthContext";
import inserirCartao from "./pages/forms/inserirCartao";
import inserirProd from "./pages/forms/inserirProd";
import alterProd from "./pages/forms/alterProd";
import newBankAcc from "./pages/forms/newBankAcc";
import alterInfo from "./pages/forms/alterInfo";
import alterAddress from "./pages/forms/newAddress";
import CartContext from "./context/CartContext";
import altersellinfo from "./pages/forms/altersellinfo";

const Pages = _ => {
    return (
        <>
            <rRouters.Switch>
                <rRouters exact path="/">
                    <Home />
                </rRouters>
                <CartContext>
                    {/* paginas */}
                    <AuthProvider>
                        <rRouters.Route exact path="/Bottom">
                            <Bottom />
                        </rRouters.Route>

                        <rRouters.Route exact path="/Top">
                            <Top />
                        </rRouters.Route>

                        <rRouters.Route exact path="/shoes/">
                            <Shoes />
                        </rRouters.Route>

                        <rRouters.Route exact path="/ShopAll">
                            <ShopAll />
                        </rRouters.Route>

                        <rRouters.Route exact path="/Header">
                            <Header />
                        </rRouters.Route>

                        <rRouters.Route exact path="/Cadastro">
                            <FormCadastro />
                        </rRouters.Route>

                        <rRouters.Route path="/Cart">
                            <Cart></Cart>
                        </rRouters.Route>

                        <rRouters.Route path="/searchProduct/:prodname" component={Searchprod} />

                        <rRouters.Route path="/myPage/:cliente_id" component={PagCliente} />

                        <rRouters.Route
                            path="/sellerPage/:vendedor_id"
                            component={SellerPage}
                        ></rRouters.Route>

                        <rRouters.Route path="/Login">
                            <FormLogin />
                        </rRouters.Route>

                        <rRouters.Route path="/finalizacao">
                            <Finalizacao />
                        </rRouters.Route>

                        <rRouters.Route path="/sucesso">
                            <SuccesScreen />
                        </rRouters.Route>

                        <rRouters.Route path="/prod/:id" component={ProductPage} />

                        <rRouters.Route path="/newCard/:idCliente" component={inserirCartao} />

                        <rRouters.Route
                            path="/insertProduct/:vendedor_id"
                            component={inserirProd}
                        />

                        <rRouters.Route path="/alterProd/:produto_id" component={alterProd} />

                        <rRouters.Route path="/newBankAcc/:vendedor_id" component={newBankAcc} />

                        <rRouters.Route path="/alterUserInfo/:cliente_id" component={alterInfo} />

                        <rRouters.Route
                            path="/alterSellerInfo/:vendedor_id"
                            component={altersellinfo}
                        />

                        <rRouters.Route path="/alterAddress/:cliente_id" component={alterAddress} />
                    </AuthProvider>
                </CartContext>
            </rRouters.Switch>
        </>
    );
};

export default Pages;
