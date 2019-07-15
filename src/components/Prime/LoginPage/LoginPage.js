import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styling
import './login.css';

// Material UI
import { Button, InputLabel, Paper, FilledInput, Typography } from '@material-ui/core';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div className="login-container">

          <Typography
            style={{textAlign: 'center', opacity: '0.5', color: 'white'}}
            variant="h2"
            display="block">
              Fantasy Football
          </Typography>

        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}

        <form onSubmit={this.login} className="form-container">

          <Paper className="paper-background">

            <Typography
            className="login-label" 
            variant="h4"
            display="block">
              Login
          </Typography>

          <br/>

            <InputLabel
            className="username-label" 
            htmlFor="username">
              Username:
              <FilledInput
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                required
              />
            </InputLabel>

            <br />

            <InputLabel 
            className="password-label"
            htmlFor="password">
              Password:
              <FilledInput
                
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
                required
              />
            </InputLabel>

            <br />

            <Button
              variant="contained"
              size="small" 
              color="secondary"
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            >
              Login
            </Button>


          <br/>
          <br/>

          <Button
            variant="contained"
            size="small" 
            color="secondary"
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
          >
            Register
          </Button>

          </Paper>

        </form>

      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
