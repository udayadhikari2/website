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
 <div className="homePage">
   <div className="sologan">
     <h2>
     People Making Technology Work
     </h2>
     <p>
     Our business entity that focuses mainly on the development and manufacturing of technology products or providing technology as a service.
     </p>
   <div className="btn btn-primary justify-content-center">
     Learn More
   </div>
   <div className="frontVector">
     <img src="./images/laptop.png" alt=""/>
   </div>
   </div>

 </div>
)


export default App;
