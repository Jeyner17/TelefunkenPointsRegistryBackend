const express = require('express');
const roomController = require('../controllers/roomController');
const router = express.Router();
const ScoreService = require('../services/score');

router.post('create-room', roomController.createRoom);
router.get(':roomId/players', roomController.getPlayers);  

// Ruta para guardar los puntajes
router.post('/save', async (req, res) => {
    const { roomId, scores } = req.body;
  
    try {
      const savedScores = await ScoreService.saveScores(roomId, scores);
      res.status(200).json(savedScores);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al guardar los puntajes' });
    }
  });
  
  // Ruta para obtener los puntajes por sala
  router.get('/get/:roomId', async (req, res) => {
    const { roomId } = req.params;
  
    try {
      const scores = await ScoreService.getScoresByRoom(roomId);
      res.status(200).json(scores);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al obtener los puntajes' });
    }
  });
  

module.exports = router;
