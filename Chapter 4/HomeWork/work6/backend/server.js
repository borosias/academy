const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

const rooms = new Map();

io.on('connection', (socket) => {
    socket.on('createRoom', (roomName) => {
        rooms.set(roomName, { users: [], messages: [] });
        io.emit('roomList', Array.from(rooms.keys()));
    });

    socket.on('joinRoom', (roomName) => {
        if (!rooms.has(roomName)) {
            return;
        }
        const user = { id: socket.id, username: `User_${socket.id.substring(0, 4)}` };
        const roomData = rooms.get(roomName);
        roomData.users.push(user);
        rooms.set(roomName, roomData);
        socket.join(roomName);
        socket.emit('roomMessages', roomData.messages);
    });

    socket.on('sendMessage', ({ room, message }) => {
        if (!rooms.has(room)) {
            return;
        }
        const messageId = Date.now();
        const user = (rooms.get(room).users || []).find(user => user.id === socket.id);
        const username = user ? user.username : 'Unknown';
        const newMessage = { id: messageId, message, username };
        const roomData = rooms.get(room);
        roomData.messages.push(newMessage);
        rooms.set(room, roomData);
        io.to(room).emit('newMessage', { room, message: newMessage });
    });

    socket.on('disconnect', () => {
        rooms.forEach((roomData, roomName) => {
            const index = roomData.users.findIndex(user => user.id === socket.id);
            if (index !== -1) {
                roomData.users.splice(index, 1);
                rooms.set(roomName, roomData);
                io.to(roomName).emit('userLeft', { room: roomName, users: roomData.users });
            }
        });
    });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
