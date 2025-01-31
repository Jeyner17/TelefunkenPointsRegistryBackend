const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const socketHandler = require('./socket/socket');
const connectDB = require('./config/db');

// Conectar a la base de datos
connectDB();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'https://venerable-squirrel-c3b174.netlify.app', // SIN '/'
        methods: ['GET', 'POST'],
        allowedHeaders:["Content-Type"],
        credentials:true
    }
});

app.use('api/scores', require('./routes/scores'));

// Configurar sockets
socketHandler(io);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
