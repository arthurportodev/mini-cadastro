
# Mini Cadastro

Laboratório prático de engenharia de software desenvolvido
para consolidar os conhecimentos adquiridos durante os
estudos no Curso.dev.

## 1. Objetivo do projeto

Construir uma aplicação web de cadastro de usuários,
utilizando nome, e-mail e senha, compreendendo todas as
etapas do desenvolvimento de software.

O objetivo não é apenas construir uma aplicação funcional,
mas desenvolver autonomia para planejar, implementar,
testar, versionar e manter sistemas de software.

## 2. Objetivos de aprendizado

- Fundamentos de JavaScript.
- Funções, condicionais e regras de negócio.
- Node.js e gerenciamento de dependências com npm.
- React e Next.js.
- Arquitetura e separação de responsabilidades.
- Protocolo HTTP e endpoints.
- APIs e comunicação entre front-end e back-end.
- PostgreSQL e SQL.
- Conexão com banco de dados.
- Migrations de banco de dados.
- Docker.
- Validação e normalização de dados.
- Armazenamento seguro de senhas com hash.
- Testes unitários e testes de integração.
- Git, GitHub e controle de versão.
- Integração contínua.

## 3. Tecnologias

### Tecnologias utilizadas atualmente

- JavaScript
- Node.js
- npm
- React 19.3.0
- Next.js 16.4.6 (App Router)
- ESLint
- Git e GitHub
- Visual Studio Code

### Tecnologias planejadas

- PostgreSQL
- Docker
- Vitest
- GitHub Actions

As tecnologias serão introduzidas progressivamente,
conforme a evolução do projeto.

## 4. Arquitetura planejada

O fluxo principal da aplicação será:

Formulário de cadastro
        |
        v
Requisição HTTP
        |
        v
API de cadastro
        |
        v
Validação e regras de negócio
        |
        v
Conexão com banco de dados
        |
        v
PostgreSQL

Os testes automatizados verificarão o comportamento
das funções e a integração entre as partes do sistema.

## 5. Estrutura do projeto

    mini-cadastro/
    |-- app/
    |   |-- api/
    |   |-- page.js
    |   |-- layout.js
    |   |-- globals.css
    |   |-- page.module.css
    |-- components/
    |-- lib/
    |-- infra/
    |-- tests/
    |   |-- unit/
    |   |-- integration/
    |-- public/
    |-- .gitignore
    |-- package.json
    |-- package-lock.json
    |-- README.md

### Responsabilidades

| Diretório | Responsabilidade |
|---|---|
| app/ | Páginas e rotas da aplicação |
| app/api/ | Endpoints HTTP |
| components/ | Componentes da interface |
| lib/ | Funções e regras de negócio |
| infra/ | Infraestrutura e conexão com banco |
| tests/unit/ | Testes unitários |
| tests/integration/ | Testes de integração |
| public/ | Arquivos estáticos |

## 6. Pré-requisitos

Para executar o projeto localmente, é necessário ter:

- Git instalado.
- Node.js instalado.
- npm instalado.
- Visual Studio Code (recomendado).
- Windows com PowerShell, ambiente utilizado no laboratório.

Versões utilizadas no ambiente de desenvolvimento:

- Node.js: v24.18.0
- npm: 11.16.0

Verifique as versões instaladas:

```powershell
git --version
node -v
npm -v
```

## 7. Instalação

Clone o repositório:

```powershell
git clone https://github.com/arthurportodev/mini-cadastro.git
```

Acesse o diretório:

```powershell
cd mini-cadastro
```

Abra o projeto no VS Code:

```powershell
code .
```

Instale as dependências:

```powershell
npm ci
```

## 8. Executar a aplicação

Inicie o servidor de desenvolvimento:

```powershell
npm run dev
```

Acesse no navegador:

http://localhost:3000

A página inicial deverá apresentar o título Mini Cadastro.

Para encerrar o servidor, pressione Ctrl + C no terminal.

## 9. Comandos disponíveis

| Comando | Responsabilidade |
|---|---|
| npm ci | Instalar as dependências registradas no lockfile |
| npm run dev | Executar o servidor de desenvolvimento |
| npm run lint | Verificar problemas no código |
| npm run build | Gerar o build de produção |
| npm run start | Executar a aplicação após o build |

## 10. Validação da aplicação

Antes de integrar alterações à branch principal, execute:

```powershell
npm run lint
npm run build
```

Verifique também o funcionamento da aplicação no navegador.

Os testes automatizados serão introduzidos nas próximas
etapas do laboratório.

## 11. Solução de problemas comuns

### Node.js ou npm não reconhecido

Verifique se o Node.js está instalado e configurado
corretamente no PATH do sistema.

```powershell
node -v
npm -v
```

### Dependências não encontradas

Confirme que está na raiz do projeto, onde está localizado
o arquivo package.json, e execute:

```powershell
npm ci
```

### Porta 3000 ocupada

Encerre o servidor que está utilizando a porta ou execute:

```powershell
npm run dev -- --port 3001
```

Nesse caso, acesse http://localhost:3001.

### Aplicação não abre no navegador

Verifique se o servidor está em execução e observe
as mensagens apresentadas no terminal.

### Git não identifica diretórios vazios

O Git não rastreia diretórios vazios.

Neste projeto, utilizamos arquivos README.md para
preservar e documentar a estrutura dos diretórios.

### Não é possível excluir uma branch local

Confirme que não está utilizando a branch que deseja
excluir.

```powershell
git switch main
```

Após um squash merge, o Git pode impedir a exclusão
com -d, pois os commits originais não fazem parte
do histórico da main.

Antes de utilizar -D, confirme que as alterações foram
integradas e que não existem trabalhos pendentes.

## 12. Fluxo de desenvolvimento

Cada tarefa será organizada em uma Issue do GitHub.

O ciclo de desenvolvimento será:

1. Compreender o problema.
2. Planejar a solução.
3. Atualizar a branch main.
4. Criar uma branch de desenvolvimento.
5. Implementar a tarefa.
6. Executar e validar a implementação.
7. Criar commit.
8. Enviar a branch ao GitHub.
9. Abrir Pull Request.
10. Revisar as alterações.
11. Realizar merge.
12. Sincronizar a main local.
13. Excluir as branches utilizadas.

## 13. Progresso do projeto

- [x] Criar o repositório no GitHub.
- [x] Organizar Milestones e Issues.
- [x] Inicializar o projeto Next.js.
- [x] Criar a página inicial.
- [x] Estruturar os diretórios.
- [x] Documentar as responsabilidades dos diretórios.
- [ ] Documentar e validar o setup.
- [ ] Construir o formulário de cadastro.
- [ ] Implementar normalização e validação de dados.
- [ ] Construir a API de cadastro.
- [ ] Configurar o banco de dados.
- [ ] Implementar a persistência dos dados.
- [ ] Implementar testes automatizados.
- [ ] Configurar integração contínua.

O progresso será atualizado conforme a conclusão das
tarefas do laboratório.

## 14. Gerenciamento do projeto

O planejamento e o acompanhamento das tarefas são
realizados através do GitHub.

- [Milestones](https://github.com/arthurportodev/mini-cadastro/milestones)
- [Issues](https://github.com/arthurportodev/mini-cadastro/issues)
- [Pull Requests](https://github.com/arthurportodev/mini-cadastro/pulls)

## 15. Metodologia de aprendizado

Cada tarefa representa uma oportunidade de praticar
os fundamentos da engenharia de software.

Nosso processo de aprendizado é baseado em:

Compreender -> Executar -> Explicar -> Reproduzir sozinho.

A prioridade é desenvolver conhecimento, capacidade
de resolução de problemas e autonomia.

O projeto é o instrumento de aprendizado.
