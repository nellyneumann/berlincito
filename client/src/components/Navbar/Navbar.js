import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Component } from "react";
import authService from "../auth/auth.service";

export default class NavbarComponent extends Component {
  logoutUser = () => {
    authService.logout().then(() => {
      this.props.getUser(null, false);
    });
  };
  render() {
    const { userData, userIsLoggedIn } = this.props;
    if (userIsLoggedIn) {
      return (
        <div className={styles.Navbar} data-testid="Navbar">
          <Navbar expand="sm">
            <Container>
              <NavbarBrand href="/">Berlincito</NavbarBrand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="Blog">Blog</Nav.Link>
                  <Nav.Link href="Events">Eventos</Nav.Link>
                  <Nav.Link href="Places">Lugares</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                {userIsLoggedIn && <li>Welcome, {userData.name}</li>}
                <button onClick={() => this.logoutUser()}>Logout</button>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div className={styles.Navbar} data-testid="Navbar">
          <Navbar expand="sm">
            <Container>
              <NavbarBrand href="/">Berlincito</NavbarBrand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="Blog">Blog</Nav.Link>
                  <Nav.Link href="Events">Eventos</Nav.Link>
                  <Nav.Link href="Places">Lugares</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                  <Nav.Link href="Login">Log in</Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }
  }
}
