const mongoose = require('mongoose');

// Esquema de Mongoose para el puntaje
const scoreSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
  },
  scores: {
    type: Map,
    of: {
      history: [Number],
      total: Number,
    },
    default: {},
  },
  // Puedes agregar más campos según lo que necesites
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
