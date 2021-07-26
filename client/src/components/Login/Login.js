import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import styles from "./Login.module.css";

const Login = () => (
  <div className={styles.Login} data-testid="Login">
    <div className="row justify-content-md-center">
      <div className="col col-md-4 p-4 m-1">
        <form>
          <h3>Log in</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
            <a href="/signup">Not a member yet? Sign up here.</a>
        </form>
      </div>
    </div>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
