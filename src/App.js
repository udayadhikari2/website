import React from 'react';
import './App.css';
import Nav from './components/nav';
import About from './components/About';
import Contact from './components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
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
   <div className="btn btn-primary">
     Hello
   </div>
 </div>
)


export default App;
