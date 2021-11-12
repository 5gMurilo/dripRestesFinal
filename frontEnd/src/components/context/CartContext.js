import React, {createContext, useState} from 'react';

const cContext = createContext();

const CartContext = (props) => {

    const [cart, setCart] = useState([]); 
    return (
        <cContext.Provider value={[cart,setCart]}>
            {props.children}
        </cContext.Provider>
    )
}

export { cContext, CartContext };
