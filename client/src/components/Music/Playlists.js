import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylists, deletePlaylist } from '../../redux/actions/playlistActions';
import { Container, Typography, List, ListItem, ListItemText, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPlaylist from './AddPlaylist';

const Playlists = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(state => state.playlists.playlists);

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePlaylist(id));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Playlists
        </Typography>
        <AddPlaylist />
        <List>
          {playlists.map((playlist) => (
            <ListItem key={playlist._id}>
              <ListItemText primary={playlist.name} secondary={playlist.description} />
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(playlist._id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Playlists;
