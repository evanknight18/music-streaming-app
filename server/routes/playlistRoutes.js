const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');
const Playlist = require('../models/Playlist');

// @route   POST api/playlists
// @desc    Create a playlist
// @access  Private
router.post(
  '/',
  [
    authMiddleware,
    [
      check('name', 'Name is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description } = req.body;

    try {
      const newPlaylist = new Playlist({
        name,
        description,
        user: req.user.id,
      });

      const playlist = await newPlaylist.save();

      res.json(playlist);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/playlists
// @desc    Get all playlists
// @access  Private
router.get('/', authMiddleware, async (req, res) => {
  try {
    const playlists = await Playlist.find({ user: req.user.id }).sort({ date: -1 });
    res.json(playlists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
