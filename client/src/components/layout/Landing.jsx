// import { Link } from 'react-router-dom';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    height: '75vh'
  },
  heading: {
    maxWidth: 1024
  },
  button: {
    margin: '0 8px',
    width: 140,
    letterSpacing: 1.5
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justify="center"
      direction="column"
      spacing={3}
    >
      <Grid item className={classes.heading}>
        <Typography component="h4" variant="h3" style={{ textAlign: 'center' }}>
          <strong>MERN</strong> Auth App
        </Typography>
        <Typography variant="subtitle1" align="center">
          A full-stack app with user authentication via Passport & JWTs
        </Typography>
      </Grid>
      <Grid item>
        <Button
          className={classes.button}
          component={Link}
          to="/register"
          variant="outlined"
          color="primary"
        >
          Register
        </Button>
        <Button
          className={classes.button}
          component={Link}
          to="/login"
          variant="outlined"
          color="secondary"
        >
          Log In
        </Button>
      </Grid>
    </Grid>
  );
};
