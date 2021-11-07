import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './component/NavBar'
import SlideView from './component/SlideView';
import RecentLecture from './component/RecentLecture'

function App() {
  return (
    <div className="App">
      <NavBar />
      <SlideView />
      <RecentLecture />
    </div>
  );
}

export default App;
