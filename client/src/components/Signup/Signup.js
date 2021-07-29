import React, { Component } from "react";
import authService from "./../auth/auth.service";

export default class SignupComponent extends Component {
  state = {
    name: "",
    password: "",
    email: "",
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
    const { name, password, email } = this.state;
    authService.signup(name, password, email).then((response) => {
      console.log(response);
      this.setState({
        message: response.message,
        name: "",
        password: "",
        email: "",
      });
      this.props.getUser(response, true);
    });
  };

  render() {
    return (
      <div className="container justify-content-center">
      <div>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
           <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
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
      </div>
      </div>
    );
  }
}
