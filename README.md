# 💬 Chat em Tempo Real com Socket.IO

Este projeto é uma aplicação de **chat em tempo real** desenvolvida com **Node.js** e **Socket.IO**, permitindo a comunicação instantânea entre múltiplos usuários através de WebSockets.

---

## 🚀 Funcionalidades

* Comunicação em tempo real entre clientes
* Conexão e desconexão dinâmica de usuários
* Envio e recebimento instantâneo de mensagens
* Arquitetura simples e fácil de expandir

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** – motor do backend
* **Socket.IO** – comunicação em tempo real via WebSockets
* **Express** – servidor HTTP
* **HTML / CSS / JavaScript** – interface do cliente


---

## ⚙️ Como Rodar o Projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/paulabiancamenezes/chatApp-With-WebSockets.git
```

### 2️⃣ Acesse a pasta do projeto

```bash
cd seu-repositorio
```

### 3️⃣ Instale as dependências

```bash
npm install
```

### 4️⃣ Inicie o servidor

```bash
npm start
```

Ou, se estiver usando nodemon:

```bash
npm run dev
```

### 5️⃣ Acesse no navegador

```
http://localhost:3000
```

---

## 🔄 Como o Socket.IO Funciona Aqui

* O cliente se conecta ao servidor via Socket.IO
* O servidor mantém uma conexão aberta com cada cliente
* Quando um usuário envia uma mensagem, o servidor **emite** o evento para todos os clientes conectados

É tipo uma rádio: um fala, todo mundo ouve 📻

---

## 📌 Possíveis Melhorias Futuras

* Salvar mensagens em banco de dados
* Sistema de usuários com login
* Salas privadas ou públicas
* Indicação de “usuário digitando...”
* Deploy em produção


Se curtiu o projeto, deixa uma ⭐ no repositório — não dói e ainda deixa o dev
