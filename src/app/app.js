import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/home/home.js';
import Projects from '../pages/projects/projects.js';
import Resume from '../pages/resume/resume.js';

import './app.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
