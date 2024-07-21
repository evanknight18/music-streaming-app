import { combineReducers } from 'redux';
import authReducer from './authReducer';
import playlistReducer from './playlistReducer';
import spotifyReducer from './spotifyReducer';

export default combineReducers({
  auth: authReducer,
  playlists: playlistReducer,
  spotify: spotifyReducer
});
