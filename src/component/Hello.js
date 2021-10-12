import { useState } from "react";

export default function Hello() {
    const [title, setTitle] = useState("김서현");

    function changeTitle() {
        setTitle(title === "김서현" ? "리액트 스터디 파이팅!" : "김서현");
    }
    
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={changeTitle}>타이틀 바꾸기</button>            
        </div>
    )
}
