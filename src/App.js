import { useState } from 'react';
import Props from './component/Props';

function App() {  
  const [num, setNum] = useState(0)
    
  function plus() {
      setNum(num + 1);
  }
  function minus() {
      setNum(num - 1);
  }

  return (
    <div className="App">      
      <div>
        <button onClick={plus}>increase</button>
        <button onClick={minus}>decrease</button>
      </div>
      <Props num={num} />
    </div>
  );
}

export default App;
