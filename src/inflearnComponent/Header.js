import React, {Component, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Form, FormControl, Button, InputGroup} from "react-bootstrap";
import LoginModal from './LoginModal';
import '../css/Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Header(props){
        const [modalShow, setModalShow] = useState(false);

        const [headers, setHeaders] = useState([]);
        useEffect(() => {
            axios.get("http://52.79.159.99:8080/api/header")
              .then(function (response) {
                setHeaders(response.data);
              });
          }, []);

		return (
            <div className="container">
            <Navbar>
            <Container className="header">
                <Navbar.Brand href="#home" style={{display: 'flex'}}>
                <img
                    src="/logo1.png"
                    /*width="50"*/
                    height="15"
                    className="d-inline-block align-top"
                    alt="logo"
                />
                </Navbar.Brand>

                <div className="navbar-menu">
                    <div className="navbar-left">
                    {headers.map(header => (
                        <Nav.Link href="#" key={header.id}>{header.header}</Nav.Link>
                    ))}
                    </div>
                    <div className="navbar-right">
                        
                        <InputGroup className="mb-3">
                            <FormControl/>
                            <InputGroup.Text id="basic-addon2"><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
                        </InputGroup>
                        <Nav.Link href="#">지식공유참여</Nav.Link>
                        <Button className="btn login" variant="primary" onClick={() => setModalShow(true)}>로그인</Button>
                        <LoginModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <Button className="btn join">회원가입</Button>
                    </div>
                </div>
            </Container>
            </Navbar>
            </div>
        );
	
}

export default Header;