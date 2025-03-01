const express = require('express');
const router = express.Router();
const ScoreService = require('../services/score');

router.post('/save', async (req, res) => {
  const { roomId, scores } = req.body;

  try {
    const savedScores = await ScoreService.saveScores(roomId, scores);
    res.status(200).json(savedScores); 
  } catch (err) {
    console.error('Error al guardar los puntajes:', err);
    res.status(500).json({ message: 'Error al guardar los puntajes' });
  }
});

module.exports = router;
