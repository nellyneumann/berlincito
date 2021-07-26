import React from 'react';
import PropTypes from 'prop-types';
import styles from './Signup.module.css';

const Signup = () => (
  <div className={styles.Signup} data-testid="Signup">
    <div className="row justify-content-md-center">
      <div className="col col-md-4 p-4 m-1">
        <form>
          <h3>Sign up</h3>
          <div className="form-group">
            <label>Your name?</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
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
            <label>Repeat password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Repeat password"
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
            <a href="/login">Already a member? Log in here.</a>
        </form>
      </div>
    </div>
      </div>
);

Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;
