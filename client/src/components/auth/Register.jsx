import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <Grid
        container
        justify="center"
        style={{ maxWidth: '95%', margin: '24px auto' }}
        spacing={3}
      >
        <Grid item sm={12}>
          <Button
            style={{ lineHeight: 'normal' }}
            variant="outlined"
            component={Link}
            to="/"
          >
            <KeyboardArrowLeft style={{ marginRight: 4 }} />
            <span style={{ marginRight: 4 }}>Go Back Home</span>
          </Button>
        </Grid>
        <Paper
          style={{
            width: '50%',
            minWidth: 300,
            maxWidth: 500,
            padding: '1.5rem'
          }}
        >
          <form noValidate onSubmit={this.onSubmit}>
            <Grid container direction="column" spacing={2}>
              <Grid item style={{ marginLeft: '.5em' }}>
                <Typography variant="h4">
                  <b>Register</b> Below
                </Typography>
                <Typography>
                  Already have an account? <Link to="/login">Log in</Link>
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  label="Name"
                  name="name"
                  id="name"
                  style={{ width: '100%' }}
                  variant="outlined"
                  error={errors.name}
                  helperText={errors.name}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  name="email"
                  id="email"
                  style={{ width: '100%' }}
                  variant="outlined"
                  error={errors.email}
                  helperText={errors.email}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  name="password"
                  id="password"
                  style={{ width: '100%' }}
                  variant="outlined"
                  type="password"
                  autoComplete="off"
                  error={errors.password}
                  helperText={errors.password}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Confirm Password"
                  name="password2"
                  id="password2"
                  style={{ width: '100%' }}
                  variant="outlined"
                  type="password"
                  autoComplete="off"
                  error={errors.password2}
                  helperText={errors.password2}
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item>
                <Button
                  style={{ width: '100%' }}
                  variant="outlined"
                  color="primary"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
