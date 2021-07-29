import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { Component } from "react";
import authService from "./../auth/auth.service";
import styles from "./Login.module.css";

export default class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    console.log(username)
    console.log(password)

    authService
      .login(username, password)
      .then(response => {
        console.log(response)
        this.setState({ name: '', password: '' });
        this.props.getUser(response, true);
        this.props.history.push('/');
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={styles.Login} data-testid="Login">
        <div className="row justify-content-md-center">
          <div className="col col-md-4 p-4 m-1">
            <form onSubmit={this.handleFormSubmit}>
              <h3>Log in</h3>
              <div className="row">
                <label>Name</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>

              <div className="row">
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="row">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="row">
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
              </div>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
              <div className="row">
              <a href="/signup">Not a member yet? Sign up here.</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
