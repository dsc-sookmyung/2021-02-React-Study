import {useState} from "react";
export default function Count(props) {

    const fontStyle = {
        fontStyle:"bold",
        fontSize: "70pt",
        padding:"30px"
      };

    return (
        <div className="Title">
            <h1 style={fontStyle}>count: {props.num}</h1>
        </div>
    );
}