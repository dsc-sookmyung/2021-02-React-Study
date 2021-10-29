import React from 'react';
import { Link } from 'react-router-dom';


export default function Hello() {
    return (
        <div> 
            <p>This is Comp 1 page</p>
            <Link to="/a">link to /a</Link>

        </div> 
    )
}