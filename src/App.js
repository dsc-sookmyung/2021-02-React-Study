import Main from './component/Main';
import Page2 from './component/Page2'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route path="/a">
              <Page2 />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
