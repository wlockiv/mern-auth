import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { Grid, Typography, Button } from '@material-ui/core';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Grid
        style={{ height: '75vh' }}
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h4"
            variant="h4"
            style={{ textAlign: 'center' }}
          >
            Howdy, {user.name.split(' ')[0]}!
          </Typography>
          <Typography style={{ textAlign: 'center' }}>
            You're logged in to a full-stack <strong>MERN</strong> application!
          </Typography>
        </Grid>
        <Grid item>
          <Button
            style={{ margin: '0 8px', width: 140, letterSpacing: 1.5 }}
            variant="outlined"
            color="secondary"
            onClick={this.onLogoutClick}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
