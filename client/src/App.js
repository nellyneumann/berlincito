import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import Events from "./components/events/Events";
import Places from "./components/places/Places";
import Blog from "./components/Blog/Blog";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Route exact path="/" component={Blog} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/places" component={Places} />
    </div>
  );
}

export default App;
