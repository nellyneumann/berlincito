import React from "react";
import PropTypes from "prop-types";
import styles from "./Blog.module.css";
import ContentContainer from "../ContentContainer/ContentContainer";
import { Container, Col } from "react-bootstrap";

const Blog = () => (
  <div className={styles.Blog} data-testid="Blog">
    <Container className="d-flex justify-content-md-center">
      <Col className="col col-md-8">
        <ContentContainer></ContentContainer>
      </Col>
    </Container>
  </div>
);

Blog.propTypes = {};

Blog.defaultProps = {};

export default Blog;
