import React from "react"; 
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
  <div className="App">

    <Switch>
      <Route exact path="/">
        <h1>This is Comp 1 page</h1>
        <Link to={'/a'}>link to /a</Link>
      </Route>
      <Route exact path="/a">
        <h1>This is Comp 2 page</h1>
        <Link to={'/'}>link to /</Link>
      </Route>
    </Switch>
  </div>
  </BrowserRouter>
  );
}

export default App;
