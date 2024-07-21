import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#333',
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
  text: {
    color: '#fff',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.footer}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" className={classes.text}>
            &copy; {new Date().getFullYear()} Music Streaming App
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
