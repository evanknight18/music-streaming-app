import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Auth from './components/Auth/Auth';
import Playlists from './components/Music/Playlists';
import Search from './pages/Search';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import { loadUser } from './redux/actions/authActions';
import setAuthToken from './utils/setAuthToken';
import { makeStyles } from '@mui/styles';
import './App.css';

// Check for token
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <div className={classes.content}>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
