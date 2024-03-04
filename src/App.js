import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/moizsaif' exact  component={Home}/>
          </Switch>
      </Router>
    </>
  );
}



export default App;
