import './App.css';
import React, {Component} from 'react';
import { useState } from 'react';
import Count from './component/Count';

function App() {

  const [count, setCount] = useState(40);

  return (
    <div>
      <button
            onClick={()=>{
                setCount(count+1);
            }}>increase</button>
      <button
            onClick={()=>{
                setCount(count-1);
            }}>decrease</button>
      <Count count={count}/>
    </div>
  );
}

export default App;