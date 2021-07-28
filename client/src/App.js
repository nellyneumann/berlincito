import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import Events from "./components/events/Events";
import Places from "./components/places/Places";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import SignupComponent from "./components/Signup/Signup";
import LandingPage from "./components/LandingPage/LandingPage";
import FooterBerlincito from "./components/FooterBerlincito/FooterBerlincito";
import authService from './components/auth/auth.service';

import { Route, Switch } from "react-router-dom";
import { Component } from "react";

class App extends Component {
  state = {
    isLoggedIn: false,
    user: null
  };

  getTheUser = (userObj, loggedIn) => {
    this.setState({
      user: userObj,
      isLoggedIn: loggedIn
    });
  };

  fetchUser = () => {
    if (this.state.user === null) {
      authService
        .loggedin()
        .then(data => {
          console.log(`User logged in`)
          this.setState({
            user: data,
            isLoggedIn: true
          });
        })
        .catch(err => {
          console.log(`No user logged in`)
          this.setState({
            user: null,
            isLoggedIn: false
          });
        });
    }
  };
 
  componentDidMount() {
    this.fetchUser();
  }

  render() {
  return (
    <div className="App">
      <NavbarComponent userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} getUser={this.getTheUser}/>
      <Switch>

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/places" component={Places} />
        <Route exact path="/login" render={(props) => <Login {...props} getUser={this.getTheUser} />} />
        <Route exact path="/signup" render={(props) => <SignupComponent {...props} getUser={this.getTheUser} />} />
      </Switch>
        <FooterBerlincito></FooterBerlincito>
    </div>
  );
  }
}

export default App;
