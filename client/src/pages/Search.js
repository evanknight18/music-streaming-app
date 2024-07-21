import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSpotify } from '../redux/actions/spotifyActions';
import { TextField, Button, Container, Typography, List, ListItem, ListItemText, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Search = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const results = useSelector(state => state.spotify.results);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchSpotify(query, filter));
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Search Music
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            margin="normal"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Filter</InputLabel>
            <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <MenuItem value="artist">Artist</MenuItem>
              <MenuItem value="album">Album</MenuItem>
              <MenuItem value="track">Track</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Search
          </Button>
        </form>
        <List>
          {results.map((track) => (
            <ListItem key={track.id}>
              <ListItemText primary={`${track.name} by ${track.artists[0].name}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Search;
