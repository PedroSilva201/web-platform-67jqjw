import React, { useContext } from "react";
import { Context } from "../AuthContext";
import "./Menu.css";

const Menu = () => {
    const { logout } = useContext(Context);
    return ( <div className = "menu">
        <div className = "itens">
        <h2 > FATEC </h2> <a href = "/login"> Login </a>
        <a href = "/gasto"> Gasto </a>
        <a onClick = {
            () => logout() } > Logout </a> </div> </div>
    );
};

export default Menu;
