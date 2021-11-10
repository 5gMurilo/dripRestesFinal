import React, {createContext, useState, useEffect} from 'react';
import { set } from 'react-hook-form';

const cContext = createContext();

function CartContext({children}) {

    const [cart, setCart] = useState(); 

    function addToCart(id) {
        setCart(id);
    }

    return (
        <cContext.Provider value={{cart}}>
            {children}
        </cContext.Provider>
    )
}

export default CartContext;
