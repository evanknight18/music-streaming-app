import axios from 'axios';
import {
  GET_PLAYLISTS,
  ADD_PLAYLIST,
  DELETE_PLAYLIST,
  PLAYLIST_ERROR
} from './types';

// Get Playlists
export const getPlaylists = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/api/playlists');

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
export const addPlaylist = (playlist) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('http://localhost:5000/api/playlists', playlist, config);

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
export const deletePlaylist = (id) => async dispatch => {
  try {
    await axios.delete(`http://localhost:5000/api/playlists/${id}`);

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
