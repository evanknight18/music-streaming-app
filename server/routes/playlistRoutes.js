const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Playlist = require('../models/Playlist');

// @route   POST api/playlists
// @desc    Create a playlist
// @access  Private
router.post('/', authMiddleware, async (req, res) => {
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
});

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

// @route   DELETE api/playlists/:id
// @desc    Delete a playlist
// @access  Private
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id);

    if (!playlist) {
      return res.status(404).json({ msg: 'Playlist not found' });
    }

    // Check user
    if (playlist.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await Playlist.deleteOne({ _id: req.params.id }); // Use deleteOne method

    res.json({ msg: 'Playlist removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Playlist not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
