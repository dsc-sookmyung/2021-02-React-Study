import React from 'react';
import ShowPage from './a';
import Hello from './hello';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Hello/>
      </Route>
      <Route path="/a">
        <ShowPage/>
      </Route>
    </Switch>
 
    </BrowserRouter>
    
  );
}

export default App;