// import { Link } from 'react-router-dom';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        style={{ height: '75vh' }}
        container
        alignItems="center"
        justify="center"
      >
        <Grid item sm={12}>
          <Typography
            component="h4"
            variant="h3"
            style={{ textAlign: 'center' }}
          >
            <b>Build</b> a login/auth app with the{' '}
            <span style={{ fontFamily: 'monospace' }}>MERN</span> stack from
            scratch
          </Typography>
          <Typography variant="subtitle1" align="center">
            create a (minimal) full-stack app with uer authentication via
            passport & JWTs
          </Typography>
        </Grid>
        <Grid item sm={6} container justify="center">
          <Button
            style={{ margin: '0 8px', width: 140, letterSpacing: 1.5 }}
            component={Link}
            to="/register"
            variant="outlined"
            color="primary"
          >
            Register
          </Button>
          <Button
            style={{ margin: '0 8px', width: 140, letterSpacing: 1.5 }}
            component={Link}
            to="/login"
            variant="outlined"
            color="secondary"
          >
            Log In
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
