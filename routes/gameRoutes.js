const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// Save a new game
router.post('/save-game', async (req, res) => {
  const { player1Name, player2Name, rounds, player1Score, player2Score, winner } = req.body;

  const newGame = new Game({
    player1Name,
    player2Name,
    rounds,
    player1Score,
    player2Score,
    winner,
  });

  try {
    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (err) {
    res.status(500).json({ message: 'Error saving the game', error: err });
  }
});

// Get all game history
router.get('/games', async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving games', error: err });
  }
});

module.exports = router;
