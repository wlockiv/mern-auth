import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

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
      <Grid container style={{ maxWidth: '95%', margin: '0 auto' }} spacing={3}>
        <Grid item sm={12}>
          <Typography variant="h4">
            <b>Register</b> Below
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Register;
