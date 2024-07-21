import { GET_PLAYLISTS, PLAYLIST_ERROR, ADD_PLAYLIST, DELETE_PLAYLIST } from '../actions/types';

const initialState = {
  playlists: [],
  loading: true,
  error: {}
};

function playlistReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PLAYLISTS:
      return {
        ...state,
        playlists: payload,
        loading: false
      };
    case ADD_PLAYLIST:
      return {
        ...state,
        playlists: [...state.playlists, payload],
        loading: false
      };
    case DELETE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.filter(playlist => playlist._id !== payload),
        loading: false
      };
    case PLAYLIST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default playlistReducer;
