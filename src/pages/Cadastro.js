import React, { useState, useContext } from "react";
import { Context } from "../AuthContext";
import "./Cadastro.css";

const Cadastro = () => {
    const [mail, setMail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacao, setConfirmacao] = useState("");
    const { cadastrar } = useContext(Context);

    const handle = (e) => {
        e.preventDefault();
        if (senha.trim().length < 6) {
            alert("A senha precisa ter pelo menos 6 caracteres");
        } else if (senha.trim() !== confirmacao.trim()) {
            alert("A senha e confirmação precisam ser iguais");
        } else {
            cadastrar(mail, senha);
        }
    };

    return ( <div className = "cadastro">
        <h4>Cadastro</h4> <div className="linha">
        <label htmlFor = "mail"> e - mail </label><input value = { mail }
        onChange = {
            (e) => setMail(e.target.value) }
        id = "mail"/>
        </div> <div className = "linha">
        <label htmlFor = "senha"> Senha </label> <
        input type = "password"
        value = { senha }
        onChange = {
            (e) => setSenha(e.target.value) }
        id = "senha"/>
        </div> <div className = "linha">
        <label htmlFor = "confirmacao" > Confirmação da senha </label> <input type = "password"
        value = { confirmacao }
        onChange = {
            (e) => setConfirmacao(e.target.value) }
        id = "confirmacao"/>
        </div> <div className = "linha">
        <button onClick = { handle } > Enviar </button> </div> </div>
    );
};

export default Cadastro;