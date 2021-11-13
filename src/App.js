import React from "react";
<<<<<<< HEAD
import Inflearn from "./component/Inflearn";

function App() {
  return (
    <Inflearn />
=======
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div>This is Comp 1 page</div>
            <Link to={"/a"}>link to /a</Link>
          </Route>
          <Route path="/a">
            <div>This is Comp 2 page</div>
            <Link to={"/"}>link to /</Link>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
>>>>>>> a3f7ae5f4fe5034149acea20c037a9e3f57deb49
  );
}

export default App;
