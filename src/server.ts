import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import path, {dirname, join} from "node:path";
import { Server } from "socket.io";

const app = express()
const port = 3000
const server = createServer(app) // criando um servidor HTTP nativo e anexandoo Express nele
const io = new Server(server) // quando fazemos isso, o socket.io automaticamente anexa uma rota especial no express

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

app.use(express.static(join(__dirname, 'public')));

let messages: any[] = [];
io.on('connection', (socket) => {
    console.log(`Novo usuário conectado: ${socket.id}`)
    
    socket.emit('previousMessages', messages)

    socket.on('sendMessage', (msg) => {
      messages.push(msg);
      socket.broadcast.emit('newMessage', msg);
    });

    socket.on('disconnect', () => {
        console.log(`Usuário desconectado: ${socket.id}`)
    });
});

server.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
