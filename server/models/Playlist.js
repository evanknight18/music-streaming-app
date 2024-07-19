const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  songs: [
    {
      title: {
        type: String,
        required: true
      },
      artist: {
        type: String,
        required: true
      },
      album: {
        type: String
      },
      duration: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Playlist', PlaylistSchema);
