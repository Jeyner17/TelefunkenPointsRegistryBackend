const Score = require('../models/score.model');

class ScoreService {
  static async getScoresByRoom(roomId) {
    try {
      const scores = await Score.findOne({ roomId });
      return scores;
    } catch (err) {
      console.error(err);
      throw new Error('Error al obtener los puntajes');
    }
  }

  static async saveScores(roomId, scoresData) {
    try {
      let score = await Score.findOne({ roomId });

      if (!score) {
        score = new Score({ roomId, scores: scoresData });
      } else {
        score.scores = scoresData;
      }

      await score.save();
      return score;
    } catch (err) {
      console.error(err);
      throw new Error('Error al guardar los puntajes');
    }
  }
}

module.exports = ScoreService;
