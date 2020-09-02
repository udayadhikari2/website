import React from 'react';
import './App.css';
import Nav from './components/nav';
import About from './components/About';
import Contact from './components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'material-icons/css/material-icons.min.css';
import 'material-icons/iconfont/material-icons.css';
import './App.scss';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/components/About" component={About} />
          <Route path="/components/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="homePage">
    <div className="sologan">
      <div className="pageDiscription">
        <h2>
          People Making Technology Work
     </h2>
        <p>
          Our business entity that focuses mainly on the development and manufacturing of technology products or providing technology as a service.
     </p>
      </div>
      <div className="btn btn-danger">
        Learn More
      </div>
    </div>
    <div className="frontVector">
      <h3>
        Welcom to My Website
      </h3>
      <img src="laptop.png" alt="" />

    </div>

  </div>
)


export default App;
