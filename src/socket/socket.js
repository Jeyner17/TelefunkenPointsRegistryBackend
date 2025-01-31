const { getRoom, roomExists, addPlayerToRoom, getRoomPlayers } = require('../models/rooms');

module.exports = (io) => {
    const roomScores = new Map(); // Almacena los puntajes por sala

    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('join-room', ({ roomId, playerName, avatar }) => {
            if (roomExists(roomId)) {
                const room = getRoom(roomId);
                const playerExists = room.players.some(player => player.name === playerName);
                
                if (!playerExists && room.players.length < room.numPlayers) {
                    addPlayerToRoom(roomId, { name: playerName, avatar });
                    socket.join(roomId);

                    // Inicializar puntajes si no existen
                    if (!roomScores.has(roomId)) {
                        roomScores.set(roomId, {});
                    }

                    // Enviar puntajes actuales al nuevo jugador
                    socket.emit('scores-update', roomScores.get(roomId));
                    io.to(roomId).emit('update-players', getRoomPlayers(roomId));
                    socket.emit('joined-room', { success: true, room });
                } else {
                    const message = playerExists ? 'Player already exists' : 'Room is full';
                    socket.emit('joined-room', { success: false, message });
                }
            } else {
                socket.emit('joined-room', { success: false, message: 'Room does not exist' });
            }
        });

        // Manejar actualización de puntajes
        socket.on('update-score', ({ roomId, playerName, score, stage }) => {
            if (roomExists(roomId)) {
                const scores = roomScores.get(roomId) || {};
                if (!scores[playerName]) {
                    scores[playerName] = {
                        history: [],
                        total: 0
                    };
                }
                
                scores[playerName].history[stage] = score;
                scores[playerName].total = scores[playerName].history.reduce((sum, curr) => sum + (curr || 0), 0);
                
                roomScores.set(roomId, scores);
                
                // Emitir actualización a todos los jugadores en la sala
                io.to(roomId).emit('scores-update', scores);
            }
        });

        socket.on('next-game', (roomId) => {
            io.to(roomId).emit('change-game');
        });

        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });
        
    });
};