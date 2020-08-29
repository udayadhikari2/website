import React from 'react';
import './App.css';
import Nav from './components/nav';
import About from './components/About';
import Contact from './components/contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
