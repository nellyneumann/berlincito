import React, { Component } from "react";
import signup from "./../auth/auth.service";

export default class SignupComponent extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    signup(username, password).then((response) => {
      console.log(response);
      this.setState({
        message: response.message,
        username: "",
        password: "",
      });
      this.props.getUser(response, true);
    });
  };

  render() {
    return (
      <>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Signup</button>
          {this.state.message && <h3>{this.state.message}</h3>}
        </form>
      </>
    );
  }
}
