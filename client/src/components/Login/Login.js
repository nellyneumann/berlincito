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
    const { username, password, message } = this.state;

    authService
      .login(username, password)
      .then(response => {
        console.log(response)
        this.setState({ username: '', password: '' });
        this.props.getUser(response, true);
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
              <div className="form-group">
                <label>Email address</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="form-group">
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
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
              <a href="/signup">Not a member yet? Sign up here.</a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
