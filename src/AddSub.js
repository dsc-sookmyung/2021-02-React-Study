import React, { useState } from "react";

function AddSub(props){
    const [num, setNum] = useState(props.num);
    
    function increase(){
        setNum(num + 1); 
    }
    
    function decrease(){ 
        setNum(num - 1); 
    }
    
    return(
        <div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <h1>Count {num}</h1>
        </div>
    );
}

export default AddSub;