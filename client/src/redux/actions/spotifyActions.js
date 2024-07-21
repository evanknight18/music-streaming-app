import axios from 'axios';

// Search Spotify
export const searchSpotify = (query) => async dispatch => {
  try {
    const res = await axios.get('/api/spotify/search', {
      params: { query }
    });

    dispatch({
      type: 'SEARCH_SUCCESS',
      payload: res.data.tracks.items
    });
  } catch (err) {
    dispatch({
      type: 'SEARCH_FAIL',
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
