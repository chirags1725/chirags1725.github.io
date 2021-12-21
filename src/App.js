import "./App.css";
import Navbar from "./Components/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Ads from "./Components/Ads";


function App() {

  const lst = [{
    id:1,
    desc:'hello'
  },
{
  id:2,
  desc:'hi'
}]

  for(var i=0; i<lst.length;i++){
    console.log(lst[i].desc)
  }

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
