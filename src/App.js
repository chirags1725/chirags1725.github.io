import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Home from "./Components/Home";


function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
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
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
