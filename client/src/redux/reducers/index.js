import { combineReducers } from 'redux';
import playlistReducer from './playlistReducer';
import authReducer from './authReducer';

export default combineReducers({
  playlist: playlistReducer,
  auth: authReducer
});
