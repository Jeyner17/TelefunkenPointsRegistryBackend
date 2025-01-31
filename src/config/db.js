const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://steeven:steeven123@telefunkenpointsregistr.yqe2b.mongodb.net/?retryWrites=true&w=majority&appName=TelefunkenPointsRegistry', {
      // Opciones adicionales si es necesario
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;