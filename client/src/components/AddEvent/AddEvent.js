import React from "react";
import PropTypes from "prop-types";
import styles from "./AddEvent.module.css";
import DataService from "../auth/data.service";
import { Component } from "react";

export default class AddEvent extends Component {
  state = { title: "", organizer: "", description: "", address: "", date: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, organizer, description, address, date } = this.state;
    DataService.postEvent(title, description, organizer, date, address)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name)
    console.log(value)
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={styles.AddEvent} data-testid="AddEvent">
        <form onSubmit={this.handleFormSubmit}>
          <h3>Add a new event</h3>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Organizer</label>
            <input
              type="text"
              name="organizer"
              value={this.state.organizer}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit Event
          </button>
        </form>
      </div>
    );
  }
}
