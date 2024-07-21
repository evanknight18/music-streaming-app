import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlaylist } from '../../redux/actions/playlistActions';
import { TextField, Button, Box } from '@mui/material';

const AddPlaylist = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addPlaylist({ name, description }));
    setName('');
    setDescription('');
  };

  return (
    <Box sx={{ mt: 4 }}>
      <form onSubmit={onSubmit}>
        <TextField
          label="Playlist Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Playlist
        </Button>
      </form>
    </Box>
  );
};

export default AddPlaylist;
