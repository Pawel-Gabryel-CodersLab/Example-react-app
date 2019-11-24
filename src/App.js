import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './scss/index.scss';
import Home from './components/Home'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";

export const apiUrl = 'http://localhost:3001';

const App = () => {
    const [ menu, setMenu ] = useState([]);

    useEffect(() => {
      fetch(`${apiUrl}/menu`)
          .then(response => response.json())
          .then(data => setMenu(data))
    }, []);

  return (
      <Router>
        <>
          <Navigation items={menu}/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </>
      </Router>
  )
}
export default App;
