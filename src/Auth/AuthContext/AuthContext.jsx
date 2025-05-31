import React, { createContext, useState } from 'react';
import { addLocalStorageCart, getLocalstorageCart } from '../../localStorage/localStorageAddItem';
export const Context = createContext()
const AuthContext = ({ children }) => {
    const storageCart=getLocalstorageCart()
    const [dessertCart,setDessertCart]=useState([...storageCart])
     console.log(dessertCart)
    const insertDessertCart = category => {
        if (category) {
            setDessertCart(category)
            addLocalStorageCart(category)
        }

    }
    const info = {
        insertDessertCart
    }
    return (
        <Context.Provider value={info}>
            {children}
        </Context.Provider>
    )
};

export default AuthContext;