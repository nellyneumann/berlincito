import React from "react";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";

const Sidebar = () => (
  <div className={styles.Sidebar} data-testid="Sidebar">
    <h5>Read our previous stories</h5>
    <ol className="justify-content-md-start">
      <li>
        <a href="#">Latin flea market in Spandau</a>
      </li>
      <li>
        <a href="#">Latin flea market in Spandau</a>
      </li>
      <li>
        <a href="#">Latin flea market in Spandau</a>
      </li>
      <li>
        <a href="#">Latin flea market in Spandau</a>
      </li>
    </ol>
  </div>
);

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
