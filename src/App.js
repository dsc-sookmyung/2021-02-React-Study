import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './component/NavBar'
import SlideView from './component/SlideView';
import RecentLecture from './component/RecentLecture'
import GetList from './component/GetList'

function App() {
  return (
    <div className="App">
      <NavBar />
      <SlideView />
      <GetList />
      <RecentLecture />
    </div>
  );
}

export default App;
