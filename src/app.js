const express = require('express');
const cors = require('cors');
const roomRoutes = require('./routes/roomRoutes');

const app = express();

// Configurar CORS para todas las rutas HTTP
app.use(cors({
    origin: 'https://venerable-squirrel-c3b174.netlify.app/',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use('/api/rooms', roomRoutes);

module.exports = app;
