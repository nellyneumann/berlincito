import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddBlogpost.module.css';
import DataService from "../auth/data.service";
import { Component } from "react";



export default class AddBlogpost extends Component {
  state = { title: "", postedBy: "", date: "", text: "", tags: [String] };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, postedBy, date, text, tags } = this.state;
    DataService.postBlogpost(title, postedBy, date, text, tags)
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
      <div className={styles.AddBlogpost} data-testid="AddBlogpost">
      <div className="col">
        <form onSubmit={this.handleFormSubmit}>
          <h3>Agregar nuevo post</h3>
          <div className="row">
            <label>Titulo</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="row">
            <label>Escrito por</label>
            <input
              type="text"
              name="postedBy"
              value={this.state.postedBy}
              onChange={this.handleChange}
            />
          </div>

          <div className="row">
            <label>Fecha</label>
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>

          <div className="row">
            <label>Text</label>
            <input
              type="text"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>

          <div className="row">
            <label>Tags</label>
            <input
              type="text"
              name="tags"
              value={this.state.tags}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Post
          </button>
        </form>
      </div>
      </div>
    );
    }
  }
