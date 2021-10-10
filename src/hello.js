import { useState } from "react";

export default function Hello() {
    const [name, setName] = useState("고나미");

    function changeName() {
       const newName = name === "고나미"?"리액트 스터디 화이팅!":"고나미"
        setName(newName);
    }
    
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>타이틀 바꾸기</button>
        </div>
    )
}