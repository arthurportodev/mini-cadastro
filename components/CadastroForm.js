import styles from "./CadastroForm.module.css";

export default function CadastroForm() {
    return (
        <form className={styles.form}>
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
                />
            </div>

            <button type="button" className={styles.botao}>Cadastrar</button>
        </form>
    );
}