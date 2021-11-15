import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Navbar, Nav, Form, FormControl, Modal } from "react-bootstrap";
import axios from "axios";

export default function Headers() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [headers, setHeaders] = useState([]);
  useEffect(() => {
    axios.get("http://52.79.159.99:8080/api/header")
      .then(function (response) {
        setHeaders(response.data);
      });
  }, []);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idChangeHandler = (e) => {
    setId(e.currentTarget.value);
  }

  const pwChangeHandler = (e) => {
    setPw(e.currentTarget.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://52.79.159.99:8080/api/login",
    {
      username: id,
      password: pw
    });
    console.log("submit");
  }

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <img src="https://cdn.inflearn.com/public/files/pages/da35da48-52a5-4ec6-b8d3-0389a47610ec/logo1.png" width="100px" alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            {headers.map(header => (
              <Nav.Link href="#" key={header.id}>{header.header}</Nav.Link>
            ))}
          </Nav>
          <Nav className="justify-content-end">
            <Form className="d-flex">
                <FormControl type="search" className="me-2" />
                <img src="https://static.thenounproject.com/png/705166-200.png" alt="search" style={{ width:'30px', height:'30px', cursor:'pointer' }} />
            </Form>
            <Nav.Link href="#">지식공유참여</Nav.Link>
            <Button variant="outline-dark" onClick={handleShow}>로그인</Button>
            <Button variant="danger">회원가입</Button>
          </Nav>
        </Container>
      </Navbar>

      {/* 로그인 팝업창 */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src="https://cdn.inflearn.com/public/files/pages/da35da48-52a5-4ec6-b8d3-0389a47610ec/logo1.png" width="100px" alt="logo" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Control type="text" name="username" value={id} onChange={idChangeHandler} placeholder="이메일 또는 아이디 입력" /> <br />
            <Form.Control type="password" name="password" value={pw} onChange={pwChangeHandler} placeholder="비밀번호" /> <br />
            <div className="d-grid gap-2">
              <Button variant="success" type="submit">로그인</Button> <br />
            </div>
            <p align="center">비밀번호 찾기 | 회원가입</p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}