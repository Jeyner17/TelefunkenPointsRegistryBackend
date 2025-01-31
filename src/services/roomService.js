const { addRoom, getRoom, roomExists, addPlayerToRoom, getRoomPlayers } = require('../models/rooms');

exports.createRoomService = (roomName, numPlayers, creatorAvatar, playerName) => {
    const roomId = Math.random().toString(36).substr(2, 9);
    addRoom(roomId, {
        roomName,
        numPlayers,
        players: [
            {
                name: playerName,
                avatar: creatorAvatar,
            },
        ],
    });
    return roomId;
};
