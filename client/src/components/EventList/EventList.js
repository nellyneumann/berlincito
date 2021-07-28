import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventList.module.css';

const EventList = () => (
  <div className={styles.EventList} data-testid="EventList">
    EventList Component
  </div>
);

EventList.propTypes = {};

EventList.defaultProps = {};

export default EventList;
