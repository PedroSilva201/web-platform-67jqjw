import React, { createContext } from "react";
import Hooks from "./Hooks";

const Context = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
    const { login, logout, logado, isLoading, cadastrar } = Hooks();
    return ( <
        Context.Provider value = {
            { login, logout, logado, isLoading, cadastrar } }> { children} </Context.Provider>
    );
}

export { Context, AuthProvider };	

