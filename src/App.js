import React, {useState} from 'react';
import './App.css';

function App() {
  const [mode, setMode] = useState("윤지애");
  function ChangeTitle(){
    setMode(mode === "윤지애" ? "리액트 스터디 화이팅!" : "윤지애");
  }
  return (
    
    <div className="App">
      <h1>{mode}</h1>
      <button onClick={ChangeTitle}>타이틀 바꾸기</button>
    </div>
  );
}

export default App;
