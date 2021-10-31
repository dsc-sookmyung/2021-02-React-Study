import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {  
  return (
    <BrowserRouter>
      <div className="App">      
        <Switch>
          <Route exact path="/"> 
            <div>This is Comp 1 page</div>
            <Link to={'/a'}>link to /a</Link>
          </Route>
          <Route path="/a">
            <div>This is Comp 2 page</div>
            <Link to={'/'}>link to /</Link>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
