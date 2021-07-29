import React from "react";
import PropTypes from "prop-types";
import styles from "./Events.module.css";
import EventListItem from "./../EventListItem/EventListItem";
import axios from "axios";
import AddEvent from "../AddEvent/AddEvent";
import { Component } from "react";
import dataService from "../auth/data.service";

class Events extends Component {
  state = { listOfEvents: [] };

  getAllEvents = () => {
    dataService.get().then((responseFromApi) => {
      this.setState({
        listOfEvents: responseFromApi.data,
      });
    });
  };

  componentDidMount() {
    this.getAllEvents();
  }

  render() {
    return (
      <div className={styles.Events} data-testid="Events">
        <div className="container">
          <div className="row row-md">
            {this.state.listOfEvents.map((event) => {
              return (
                <div key={event._id} className={styles.eventContainer}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p>Organizado por: {event.organizer}</p>
                  <p>{event.description}</p>
                  <p>Donde: {event.address}</p>
                  <p>Cuando: {event.date}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row row-md-6 justify-content-center">
          <div className="col col-md-4">
            <AddEvent getData={() => this.getAllEvents()} /> {/* <== !!! */}
          </div>
        </div>
      </div>
    );
  }
}

Events.propTypes = {};

Events.defaultProps = {};

export default Events;
