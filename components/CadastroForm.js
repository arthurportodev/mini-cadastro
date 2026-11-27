
"use client";

import { useState } from "react";
import styles from "./CadastroForm.module.css";

export default function CadastroForm() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function capturarDados(event) {
        event.preventDefault();

        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        console.log("Dados capturados:", {
            nome: usuario.nome,
            email: usuario.email,
            senhaPreenchida: usuario.senha.length > 0
        });
    }

    return (
        <form
            className={styles.form}
            method="post"
            onSubmit={capturarDados}
        >
            <h1>Mini Cadastro</h1>
            <p>Crie sua conta</p>

            <div className={styles.campo}>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Digite seu nome"
                    autoComplete="name"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />
            </div>

            <div className={styles.campo}>
                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <div className={styles.campo}>
                <label htmlFor="senha">Senha</label>
                <input
                    id="senha"
                    name="senha"
                    type="password"
                    placeholder="Digite sua senha"
                    autoComplete="new-password"
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                />
            </div>

            <button type="submit" className={styles.botao}>
                Cadastrar
            </button>
        </form>
    );
}
