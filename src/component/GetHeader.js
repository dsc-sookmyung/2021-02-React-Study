import React from "react";
import axios from "axios";
import { Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

function GetHeader() {
  const [headers, setHeaders] = useState([]);

  const getHeaders = async () => {
    const response = await axios.get("http://52.79.159.99:8080/api/header");
    setHeaders(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getHeaders();
  }, []);

  return (
    <div>
      <Nav>
        {headers &&
          headers.map((header) => {
            return <Nav.Link key={header.id}>{header.header}</Nav.Link>;
          })}
      </Nav>
    </div>
  );
}

export default GetHeader;
