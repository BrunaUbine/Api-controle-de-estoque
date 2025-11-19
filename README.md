# 📦 API Controle de Estoque

Este projeto é uma API simples para controle de estoque, desenvolvida para a matéria de Programação Web.  
Aqui é possível cadastrar e consultar produtos, registrar entradas e saídas, e fazer autenticação de usuários.

---

## 🚀 Tecnologias utilizadas
- Node.js  
- Express  
- TypeORM  
- MySQL  
- JSON Web Token (JWT)  
- Swagger (documentação)

---

## 📁 Funcionalidades
- Registro e login de usuários  
- Autenticação com JWT  
- CRUD de produtos  
- Registro de entradas no estoque  
- Registro de saídas do estoque  
- Documentação da API com Swagger

---

## 📚 Documentação (Swagger)

A documentação da API pode ser acessada em:

http://localhost:3000/api-docs


Por lá você pode visualizar os endpoints e testar as requisições.

---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório
https://github.com/BrunaUbine/Api-controle-de-estoque.git


### 2. Instalar dependências
npm install


### 3. Criar o arquivo `.env`
Exemplo:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123456
DB_NAME=controle_estoque
JWT_SECRET=chave_secreta


### 4. Rodar o servidor
npm run dev


---

## 🔑 Autenticação

As rotas protegidas exigem envio de token JWT no header:

Authorization: Bearer SEU_TOKEN_AQUI


O token é gerado ao fazer login.

---

## 🧪 Testes
Os testes serão feitos usando **Vitest e Supertest**, conforme os requisitos do projeto.

---

## 👥 Integrantes do grupo


- Bruna Luiza Nunes Ubine  
- Paulo César da Silva Zanotelo 
- Vinicius Pancracio Mendonça de Abreu  


---

