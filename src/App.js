import React from "react";
import "./App.css";
import Lectures from "./component/Lectures";
import Headers from "./component/Headers";
import Slides from "./component/Slides";

function App() {

  return (
      <div className="App">

        {/* 네비게이션 바 */}
        <Headers />

        {/* 배너 */}
        <Slides />

        {/* 강의 */}
        <Lectures />

      </div>
  );
}

export default App;
