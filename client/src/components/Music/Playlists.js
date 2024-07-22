import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylists, deletePlaylist } from '../../redux/actions/playlistActions';
import { Container, Typography, List, ListItem, ListItemText, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPlaylist from './AddPlaylist';

const Playlists = () => {
  const dispatch = useDispatch();
  const playlistsState = useSelector(state => state.playlist); // Adjusted for correct state
  const { playlists, loading, error } = playlistsState; // Destructure the state

  useEffect(() => {
    dispatch(getPlaylists());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePlaylist(id));
  };

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error.msg}</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Playlists
        </Typography>
        <AddPlaylist />
        {playlists.length > 0 ? (
          <List>
            {playlists.map((playlist) => (
              <ListItem key={playlist._id} secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(playlist._id)}>
                  <DeleteIcon />
                </IconButton>
              }>
                <ListItemText primary={playlist.name} secondary={playlist.description} />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1">No playlists found</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Playlists;
