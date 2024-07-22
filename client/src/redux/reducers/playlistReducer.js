import {
  GET_PLAYLISTS,
  ADD_PLAYLIST,
  DELETE_PLAYLIST,
  PLAYLIST_ERROR
} from '../actions/types';

const initialState = {
  playlists: [],
  loading: true,
  error: null
};

export default function playlistReducer(state = initialState, action) {
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
        playlists: [payload, ...state.playlists],
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
