const express = require('express');
const cors = require('cors');
const roomRoutes = require('./routes/roomRoutes');
const app = express();

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'OPTION'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use('/api/rooms', roomRoutes);

module.exports = app;
