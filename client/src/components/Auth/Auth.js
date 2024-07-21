import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Container,
  Box,
  Tabs,
  Tab,
  Paper
} from '@mui/material';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const { isAuthenticated, error } = auth;

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/playlists');
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login(email, password));
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  const handleTabChange = (event, newValue) => {
    setIsLogin(newValue === 0);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Tabs
            value={isLogin ? 0 : 1}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          {error && <p style={{ color: 'red' }}>{error.msg}</p>}
          <form onSubmit={onSubmit}>
            {!isLogin && (
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default Auth;
