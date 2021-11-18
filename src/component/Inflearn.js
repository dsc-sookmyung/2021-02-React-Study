import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  Modal,
  Card,
  CardGroup,
} from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import GetSlide from "./GetSlide";
import GetHeader from "./GetHeader";
<link
  rel="stylesheet"
  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
  crossorigin="anonymous"
/>;

function Inflearn() {
  const [modalShow, setModalShow] = React.useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const onClickHandler = (e) => {
    let body = {
      username: id,
      password: pw,
    };
    e.preventDefault();
    axios.post("http://52.79.159.99:8080/api/login", body);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://cdn.inflearn.com/public/files/pages/da35da48-52a5-4ec6-b8d3-0389a47610ec/logo1.png"
              width="100px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <GetHeader />
            </Nav>
            <Nav className="justify-content-end">
              <input></input>
              <Nav.Link href="#">지식공유참여</Nav.Link>
              <Button
                variant="outline-dark"
                size="sm"
                onClick={() => setModalShow(true)}
              >
                로그인
              </Button>
              <Button variant="danger" size="sm">
                회원가입
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img
              src="https://cdn.inflearn.com/public/files/pages/da35da48-52a5-4ec6-b8d3-0389a47610ec/logo1.png"
              width="100px"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="email"
              placeholder="이메일 또는 아이디 입력"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
              className="mb-2"
            />
            <Form.Control
              type="password"
              placeholder="비밀번호"
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
              }}
              className="mb-2"
            />
            <div className="d-grid gap-2">
              <Button
                onClick={onClickHandler}
                variant="success"
                size="lg"
                className="mb-2"
              >
                로그인
              </Button>
            </div>
            <p align="center">비밀번호 찾기 | 회원가입</p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning">kakao</Button>
          <Button variant="light">google</Button>
          <Button variant="dark">github</Button>
          <Button variant="primary">facebook</Button>
          <Button variant="secondary">apple</Button>
        </Modal.Footer>
      </Modal>
      <GetSlide />

      <CardGroup>
        <Card>
          <Card.Img src="https://cdn.inflearn.com/public/courses/324951/course_cover/510c265a-6de2-456d-8e6a-351b9ce29608/nodeReactbasic.png" />
          <Card.Body>
            <Card.Title>실전 HTML & CSS 강좌</Card.Title>
            <Card.Text>기한: 무제한</Card.Text>
            <Button variant="success">바로 학습</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src="https://cdn.inflearn.com/wp-content/uploads/web1.png" />
          <Card.Body>
            <Card.Title>따라하며 배우는 노드, 리액트 시리즈</Card.Title>
            <Card.Text>기한: 무제한</Card.Text>
            <Button variant="success">바로 학습</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Inflearn;
