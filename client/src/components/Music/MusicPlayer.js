import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Add logic to play/pause music
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h6">{song.title}</Typography>
      <IconButton onClick={handlePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
    </Box>
  );
};

export default MusicPlayer;
