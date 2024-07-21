import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1E1E1E',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
    },
    primary: {
      main: '#1DB954',
    },
    secondary: {
      main: '#1E90FF',
    },
  },
});

export default theme;
