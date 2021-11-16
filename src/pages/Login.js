
import React, { useState, useContext } from "react";
import { Context } from "../AuthContext";
import history from "../history";
import "./Login.css";

const Login = () => {
    const [mail, setMail] = useState("");
    const [senha, setSenha] = useState("");
    const { login } = useContext(Context);

    const handle = (e) => {
        e.preventDefault();
        login(mail, senha);
    };

    return ( <
        div className = "login" >
        <h4> Login </h4> <
        div className = "linha" >
        <
        label htmlFor = "mail" > e - mail </label> <
        input value = { mail }
        onChange = {
            (e) => setMail(e.target.value) }
        id = "mail" /
        >
        </div><div className = "linha">
        <
        label htmlFor = "senha">Senha</label> <
        input type = "password"
        value = { senha }
        onChange = {
            (e) => setSenha(e.target.value) }
        id = "senha" /
        >
        </div> <div className = "linha-botao" >
        <button onClick = { handle } > Logar </button> <
        button onClick = {
            () => history.push("/cadastro") } > Cadastrar </button> </div> </div>
    );
};

export default Login;	