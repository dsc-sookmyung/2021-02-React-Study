import { useState } from "react";

export default function Count(props){
    var text_style={fontSize: "50px"}
    return(
        <div style={text_style}>
            Count {props.count}
        </div>
    );

}