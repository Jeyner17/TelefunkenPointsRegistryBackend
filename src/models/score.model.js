const mongoose = require('mongoose');

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
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
