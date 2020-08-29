import React from 'react';
import './App.css';
import Nav from './components/nav';
import About from './components/About';
import Contact from './components/contact';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/components/About" component={About}/>
      <Route path="/components/contact" component={Contact}/>
      </Switch>
    </div>
    </Router>
  );
}

const Home=()=>(
  <div>
    <h1>
      This Is my Home Page
    </h1>
  </div>
)


export default App;
