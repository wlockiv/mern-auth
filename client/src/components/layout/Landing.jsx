// import { Link } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';
import React, { Component } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div style={{ height: '75vh' }} className={classes.root}>
      <Grid container spacing={3}>
        <Grid item s={12} alignContent="center">
          <h4>
            <b>Build</b> a login/auth app with the{' '}
            <span style={{ fontFamily: 'monospace' }}>MERN</span> stack from
            scratch
          </h4>
        </Grid>
      </Grid>
    </div>
  );
};
