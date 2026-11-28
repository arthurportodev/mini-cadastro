
"use client";

import { useState } from "react";
import styles from "./CadastroForm.module.css";

import {
    normalizarNome,
    normalizarEmail
} from "../lib/normalizacao";

import { validarUsuario } from "../lib/validacao";

export default function CadastroForm() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({});
    const [mensagem, setMensagem] = useState("");

    function capturarDados(event) {
        event.preventDefault();

        setMensagem("");

        const usuario = {
            nome: normalizarNome(nome),
            email: normalizarEmail(email),
            senha: senha
        };

        const errosValidacao = validarUsuario(usuario);

        setErros(errosValidacao);

        if (Object.keys(errosValidacao).length > 0) {
            setMensagem("Corrija os campos indicados.");
            return;
        }

        setNome(usuario.nome);
        setEmail(usuario.email);

        setMensagem("Dados validados com sucesso!");
    }

    return (
        <form
            className={styles.form}
            method="post"
            onSubmit={capturarDados}
            noValidate
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
                    required
                    onChange={(event) => setNome(event.target.value)}
                    aria-invalid={Boolean(erros.nome)}
                    aria-describedby={erros.nome ? "erro-nome" : undefined}
                />

                {erros.nome && (
                    <small id="erro-nome">
                        {erros.nome}
                    </small>
                )}
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
                    required
                    onChange={(event) => setEmail(event.target.value)}
                    aria-invalid={Boolean(erros.email)}
                    aria-describedby={erros.email ? "erro-email" : undefined}
                />

                {erros.email && (
                    <small id="erro-email">
                        {erros.email}
                    </small>
                )}
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
                    required
                    onChange={(event) => setSenha(event.target.value)}
                    aria-invalid={Boolean(erros.senha)}
                    aria-describedby={erros.senha ? "erro-senha" : undefined}
                />

                {erros.senha && (
                    <small id="erro-senha">
                        {erros.senha}
                    </small>
                )}
            </div>

            <button
                type="submit"
                className={styles.botao}
            >
                Cadastrar
            </button>

            <p role="status">{mensagem}</p>

        </form>
    );
}
