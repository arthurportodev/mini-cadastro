export function validarNome(nome) {
    return typeof nome === "string" && nome.trim().length > 0;
}

export function validarEmail(email) {
    if (typeof email !== "string") {
        return false;
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

export function validarSenha(senha) {
    return typeof senha === "string" && senha.length >= 8;
}

export function validarUsuario(usuario) {
    const erros = {};
    
    if (!validarNome(usuario.nome)) {
        erros.nome = "O nome é obrigatório.";
    }
    if (!validarEmail(usuario.email)) {
        erros.email = "Informe um e-mail válido.";
    }
    if (!validarSenha(usuario.senha)) {
        erros.senha = "A senha deve ter pelo menos 8 caracteres.";
    }
    
    return erros;
}