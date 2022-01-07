import "./App.css";
import Navbar from "./Components/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Ads from "./Components/Ads";
import Sitemap from "./Components/sitemap";

function App() {
  return (
    <>
      <Router>
        <Navbar background="show"></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact_me">
            <Contact />
          </Route>
          <Route path="/ads">
            <Ads />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
          <Route path="/sitemap" component={Sitemap}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
