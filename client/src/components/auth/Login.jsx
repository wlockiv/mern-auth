import { Button, Grid, Typography, Paper, TextField } from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      // Direct user to dashboard when they login
      this.props.history.push('/dashboard');
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(userData);
    this.props.loginUser(userData);
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
                  <b>Log In</b> Below
                </Typography>
                <Typography>
                  Don't have an account yet?{' '}
                  <Link to="/register">Register</Link>
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  name="email"
                  id="email"
                  style={{ width: '100%' }}
                  variant="outlined"
                  error={errors.email || errors.emailnotfound}
                  helperText={[errors.email, errors.emailnotfound]
                    .filter(Boolean)
                    .join(', ')}
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
                  error={errors.password || errors.passwordincorrect}
                  helperText={[errors.password, errors.passwordincorrect]
                    .filter(Boolean)
                    .join(', ')}
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
                  Log In
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
