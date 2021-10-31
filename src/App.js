import "./App.css";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Router from "./component/Router";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <p>This is Comp 1 page</p>
            <Link to="/a">link to /a</Link>
          </Route>
          <Route path="/a">
            <Router />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
