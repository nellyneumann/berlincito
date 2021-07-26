import React from 'react';
import PropTypes from 'prop-types';
import styles from './Events.module.css';
import EventListItem from './../EventListItem/EventListItem';

const Events = () => (
  <div className={styles.Events} data-testid="Events">
  <EventListItem></EventListItem>
  </div>
);

Events.propTypes = {};

Events.defaultProps = {};

export default Events;
