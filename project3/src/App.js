import './App.css';
import {useState} from "react";
import Count from './component/Count';


function App() {

  const [count, setCount] = useState(0);
  
  const onIncrease = (n) => {
      setCount(count + n);
    }
  const onDecrease = () => {
      setCount(count - 1);
    }
  
  const btnStyle = {
    color: "white",
    background: "black",
    padding: "10px 10px",
    margin:"8px",
    width:"312px",
    border: "1px solid teal",
    borderRadius: ".25rem",
    fontSize: "30px",
    lineHeight: 2,
  };

  return (
    <div className="App">
        <button style={btnStyle} onClick={() => onIncrease(1)}>Increase</button>
        <button style={btnStyle} onClick={() => onDecrease(1)}>Decrease</button>
        <Count num={count}/>
    </div>
  );
}

export default App;
