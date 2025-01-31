const rooms = {};

exports.addRoom = (roomId, room) => {
    rooms[roomId] = room;
};

exports.getRoom = (roomId) => {
    return rooms[roomId];
};

exports.roomExists = (roomId) => {
    return !!rooms[roomId];
};

exports.addPlayerToRoom = (roomId, player) => {
    rooms[roomId].players.push(player);
};

exports.getRoomPlayers = (roomId) => {
    return rooms[roomId] ? rooms[roomId].players : [];
};
