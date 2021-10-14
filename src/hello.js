import { useState } from "react";

export default function Hello(props) {

    const [num, setNum] = useState(props.num);

    return (
        <div> 
            <button
             onClick={() => {
                 setNum(num + 1);
                 }}> + </button>
            <button onClick={() => {setNum(num - 1);}}> - </button>
            <h1>Count{num}</h1>
        </div> 
    )
}