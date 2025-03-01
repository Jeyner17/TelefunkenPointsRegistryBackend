const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const socketHandler = require('./socket/socket');
const connectDB = require('./config/db');

connectDB();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST']
    }
});
app.use('/api/scores', require('./routes/scores'));

socketHandler(io);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});