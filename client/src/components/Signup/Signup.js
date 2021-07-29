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

    authService
      .signup(name, password, email)
      .then(response => {
        console.log(`THen in signup`)
        console.log(response);
        this.setState({
          message: response.message,
          name: "",
          password: "",
          email: "",
        });
        this.props.getUser(response, true);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(`Error in signup.`)
        console.error(error);
      });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col col-md-6 justify-content-center">
          <h2>Signup</h2>
          <form onSubmit={this.handleSubmit}>
        <div className="row">

            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            </div>
        <div className="row">

            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            </div>
        <div className="row">

            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            </div>
            <div className="row">
            <button className="btn btn-primary" type="submit">Signup</button>
            {this.state.message && <h3>{this.state.message}</h3>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
