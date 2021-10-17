import { useState } from "react";
import Props from "./component/Props";
import "./App.css";

function App() {

  let [num, setNum] = useState(0); // 변수 num의 초기값 = 0
  
  function increase() {
    setNum(++num); // 먼저 연산 후 num 값 저장
  }

  function decrease() {
    setNum(--num);
  }

  return (
    <div className="App">
      <button onClick={ increase } className="btn">increase</button>
      <button onClick={ decrease } className="btn">decrease</button>
      {/* num 값을 Props 컴포넌트에 전달 */}
      <Props num={num} />
    </div>
  );
}

export default App;
