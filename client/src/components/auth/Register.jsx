import { Button, Grid, Typography, Paper, TextField } from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

  onChange = e => {
    this.setState({ [e.target.id]: e.target.values });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, password, password2 } = this.state;

    const newUser = {
      name,
      email,
      password,
      password2
    };

    console.log(newUser);
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
        <Grid item sm={2}>
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
            // minHeight: 200,
            padding: '1.5rem'
          }}
        >
          <form action="">
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
                  style={{ width: '100%' }}
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  name="email"
                  style={{ width: '100%' }}
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  name="password"
                  style={{ width: '100%' }}
                  variant="outlined"
                  type="password"
                  autoComplete="off"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Confirm Password"
                  name="password2"
                  style={{ width: '100%' }}
                  variant="outlined"
                  type="password"
                  autoComplete="off"
                />
              </Grid>
              <Grid item alignItems="center">
                <Button
                  style={{ width: '100%' }}
                  variant="outlined"
                  color="primary"
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

export default Register;
