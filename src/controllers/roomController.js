const { createRoomService } = require('../services/roomService');

exports.createRoom = (req, res) => {
    const { roomName, numPlayers, creatorAvatar, playerName } = req.body;
    const roomId = createRoomService(roomName, numPlayers, creatorAvatar, playerName);
    res.json({ roomId });
};

exports.getPlayers = (req, res) => {
    const { roomId } = req.params;
    const players = getRoomPlayers(roomId);
    res.json(players);
};
