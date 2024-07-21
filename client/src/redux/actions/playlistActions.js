import axios from 'axios';
import { GET_PLAYLISTS, PLAYLIST_ERROR, ADD_PLAYLIST, DELETE_PLAYLIST } from './types';

// Get Playlists
export const getPlaylists = () => async dispatch => {
  try {
    const res = await axios.get('/api/playlists');

    dispatch({
      type: GET_PLAYLISTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PLAYLIST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Playlist
export const addPlaylist = ({ name, description }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, description });

  try {
    const res = await axios.post('/api/playlists', body, config);

    dispatch({
      type: ADD_PLAYLIST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PLAYLIST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Playlist
export const deletePlaylist = id => async dispatch => {
  try {
    await axios.delete(`/api/playlists/${id}`);

    dispatch({
      type: DELETE_PLAYLIST,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: PLAYLIST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
