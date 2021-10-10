import {useState} from "react";
export default function Hello() {
    const [title,setTitle]=useState("김진영");

    function changeTitle(){
        setTitle(title === "김진영" ? "리액트 스터디 화이팅!" : "김진영");
    }

    return (
        <div className="Title">
            <h2>{title}</h2>
            <button onClick={changeTitle}>타이틀 바꾸기</button>
        </div>
    );
}