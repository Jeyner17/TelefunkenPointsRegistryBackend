const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const socketHandler = require('./socket/socket');
const connectDB = require('./config/db');

connectDB();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'OPTION']
    }
});
app.use('/api/scores', require('./routes/scores'));

socketHandler(io);

server.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on port 3000');
});
