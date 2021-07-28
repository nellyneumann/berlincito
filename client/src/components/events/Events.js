import React from "react";
import PropTypes from "prop-types";
import styles from "./Events.module.css";
import EventListItem from "./../EventListItem/EventListItem";
import axios from 'axios';
import AddEvent from '../AddEvent/AddEvent';
import { Component } from "react";

class Events extends Component {
  state = { listOfEvents: [] }

  getAllEvents = () =>{
    axios.get(`http://localhost:5005/api/events`)
    .then(responseFromApi => {
      this.setState({
        listOfProjects: responseFromApi.data
      });
    });
  }
 
  componentDidMount() {
    this.getAllEvents();
  }

  render() {
    return (
      <div className={styles.Events} data-testid="Events">
       <div style={{width: '60%', float:"left"}}>
          { this.state.listOfEvents.map( event => {
            return (
              <div key={event._id}>
                  <h3>{event.title}</h3>
                  <p>{event.organizer}</p>
                <p style={{maxWidth: '400px'}} >{event.description} </p>
              </div>
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
            <AddEvent getData={() => this.getAllEvents()}/> {/* <== !!! */}
        </div>
      </div>
    );
  }
}

Events.propTypes = {};

Events.defaultProps = {};

export default Events;
