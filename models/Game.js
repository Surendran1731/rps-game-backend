const mongoose = require('mongoose');

// Define the game schema
const gameSchema = new mongoose.Schema({
  player1Name: { type: String, required: true },
  player2Name: { type: String, required: true },
  rounds: [
    {
      player1Choice: { type: String, required: true },
      player2Choice: { type: String, required: true },
      result: { type: String, required: true },
    },
  ],
  player1Score: { type: Number, default: 0 },
  player2Score: { type: Number, default: 0 },
  winner: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Create a model based on the schema
module.exports = mongoose.model('Game', gameSchema);
