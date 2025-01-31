const cors = require('cors');
const express = require('express');

const app = express();

// Configurar CORS para todas las rutas HTTP
app.use(cors({
    origin: ['https://venerable-squirrel-c3b174.netlify.app'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials:true
}));

app.use(express.json());
app.use('/api/rooms', require('./routes/rooms'));

module.exports = app;
