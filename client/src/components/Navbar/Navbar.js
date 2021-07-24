import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavbarComponent = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <Navbar expand="sm">
      <Container>
        <NavbarBrand>Berlincito</NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Blog">Blog</Nav.Link>
            <Nav.Link href="Events">Events</Nav.Link>
            <Nav.Link href="Places">Places</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

NavbarComponent.propTypes = {};

NavbarComponent.defaultProps = {};

export default NavbarComponent;
