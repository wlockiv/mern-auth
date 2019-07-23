import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar color="inherit">
          <Typography variant="h6" color="inherit" component={Link} to="/">
            MERN
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
