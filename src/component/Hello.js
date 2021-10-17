import { useState } from "react";

export default function Hello( {age} ) {
    const [title, setTitle] = useState("김서현");
    const msg = age > 19 ? "성인입니다." : "미성년자입니다.";

    function changeTitle() {
        setTitle(title === "김서현" ? "리액트 스터디 파이팅!" : "김서현");
    }
    
    return (
        <div>
            <h2>{title}({age}) : {msg}</h2>
            <button onClick={changeTitle}>타이틀 바꾸기</button>            
        </div>
    )
}
