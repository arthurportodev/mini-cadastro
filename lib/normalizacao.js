export function normalizarNome(nome) {
    if (typeof nome !== "string") {
        return "";
    }
    return nome.trim().replace(/\s+/g, " ");
}

export function normalizarEmail(email) {
    if (typeof email !== "string") {
        return "";
    }
    return email.trim().toLowerCase();
}