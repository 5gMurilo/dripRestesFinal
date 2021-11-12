import React, { createContext, useState, useEffect } from "react";
import api from "../API/api";
import { useHistory } from "react-router-dom";

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    let history = useHistory();

    
    useEffect(() => {
        var locStorage = localStorage.getItem("userData");
        var locStorage2 = localStorage.getItem("sellerData");
        if (locStorage) {
            setAuthenticated(true);
        }else if(locStorage2){
            setAuthenticated(true);

        }
        setLoading(false);
    }, []);
    
    console.log(authenticated);

    async function handleLogin(email, password) {
        await api
            .post("/login", {
                email: email,
                password: password,
            })
            .then(resp => {
                if (resp.data.auth === true) {
                    setAuthenticated(true);
                    localStorage.setItem('userData', JSON.stringify(resp.data.session));
                    console.log(localStorage.getItem('userData'));
                    history.push(`/myPage/${resp.data.session[0].cliente_id}`);
                } else {
                    console.log("se fudeu otário");
                    console.log(resp);
                }
            });
    }

    async function handleSellersLogin(email, password) {
        await api
            .post("/sellerLogin", {
                email: email,
                password: password,
            })
            .then(resp => {
                if (resp.data.auth === true) {
                    console.log("inside handle");
                    setAuthenticated(true);
                    localStorage.setItem('sellerData', JSON.stringify(resp.data));
                    console.log(localStorage.getItem('sellerData'));
                    history.push(`/sellerPage/${resp.data.session[0].vendedor_id}`);
                } else {
                    console.log("deu ruim bobão");
                    console.log(resp);
                }
            });
    }

    async function handleLogout() {
        setAuthenticated(false);
        
        localStorage.removeItem('userData');
            
        history.push("/login");
    }


    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <Context.Provider
            value={{ authenticated, handleLogin, handleSellersLogin, handleLogout, history }}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };
