import React from "react";
import PropTypes from "prop-types";
import styles from "./LandingPage.module.css";
import blog from './../../assets/img/blog.png';
import events from './../../assets/img/events.png';
import places from './../../assets/img/places.png';
import { Button, Card } from "react-bootstrap";

const LandingPage = () => (
  <div className={styles.LandingPage} data-testid="LandingPage">
    <div className="row">
      <div className="col bg-secondary col-sm-4">
        <Card className={styles.landingCard}>
        <Card.Img variant="top" src={blog}/>
          <Card.Body>
            <Card.Title>Blog</Card.Title>
            <Card.Text>
              Toda la información para iniciar tu vida en Berlín y no morir en el intento.
            </Card.Text>
            <Button variant="primary" href="/blog">Acceder</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col bg-secondary col-sm-4">
        <Card className={styles.landingCard}>
        <Card.Img variant="top" src={events} />
          <Card.Body>
            <Card.Title>Eventos</Card.Title>
            <Card.Text>
              Entérate de todos los eventos latinos en Berlín y sus alrededores.
            </Card.Text>
            <Button variant="primary" href="/events">Acceder</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col bg-secondary col-sm-4">
        <Card className={styles.landingCard}>
        <Card.Img variant="top" src={places} />
          <Card.Body>
            <Card.Title>Lugares</Card.Title>
            <Card.Text>
              Encuentra los mejores lugares latinos en Berlín.
            </Card.Text>
            <Button variant="primary" href="/places">Acceder</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
);

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
