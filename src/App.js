import './App.css';
import React, {Component} from 'react';
import { useState } from 'react';
import Count from './component/Count';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

function App() {

  const [count, setCount] = useState(40);

  return (
    <BrowserRouter>
      <div>
      <Switch>
        <Route exact path="/">
          This is a comp 1 page<br/>
          <Link to="/a">link to /a</Link>
        </Route>
        <Route path="/a">
          This is a comp 2 page<br/>
          <Link to="/">link to /</Link>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;