import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import Events from "./components/events/Events";
import Places from "./components/places/Places";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import LandingPage from "./components/LandingPage/LandingPage";
import FooterBerlincito from "./components/FooterBerlincito/FooterBerlincito";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/places" component={Places} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <FooterBerlincito></FooterBerlincito>
    </div>
  );
}

export default App;
