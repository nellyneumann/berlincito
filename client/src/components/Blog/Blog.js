import React from "react";
import PropTypes from "prop-types";
import styles from "./Blog.module.css";
import ContentContainer from "../ContentContainer/ContentContainer";
import Sidebar from "../Sidebar/Sidebar";
import { Container, Col, Row, Button } from "react-bootstrap";

const Blog = () => {return(
  <div className={styles.Blog} data-testid="Blog">
    <Container className="d-flex justify-content-md-center">
      <Col className="col col-md-8">
        <Row>
          <ContentContainer></ContentContainer>
        </Row>
      </Col>
      <Col className="col col-md-4 offset-8 position-fixed">
      <Sidebar></Sidebar>
      </Col>
    </Container>

  </div>
)};

Blog.propTypes = {};

Blog.defaultProps = {};

export default Blog;
