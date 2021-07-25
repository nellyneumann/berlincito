import React from 'react';
import PropTypes from 'prop-types';
import styles from './FooterBerlincito.module.css';
import berlinSkyline from './../../assets/img/berlinSkyline.png';

const FooterBerlincito = () => (
  <div className={styles.FooterBerlincito} data-testid="FooterBerlincito">
    <img src={berlinSkyline} alt="Berlin skyline vector graphic" />
  </div>
);

FooterBerlincito.propTypes = {};

FooterBerlincito.defaultProps = {};

export default FooterBerlincito;
