import "./App.css";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmptyPage from "./component/EmptyPage";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day"> {/* 변수 day */}
            <Day />
          </Route>
          <Route> {/* 어떤 조건도 만족하지 않을 때 */}
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
