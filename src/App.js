import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Navbar, Nav, Form, FormControl, Card, Modal } from "react-bootstrap"

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div className="App">

        {/* 네비게이션 바 */}
        <Navbar>
          <Container>
            <Navbar.Brand href="/">
              <img src="https://cdn.inflearn.com/public/files/pages/da35da48-52a5-4ec6-b8d3-0389a47610ec/logo1.png" width="100px" alt="logo" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">강의</Nav.Link>
              <Nav.Link href="#">로드맵</Nav.Link>
              <Nav.Link href="#">멘토링</Nav.Link>
              <Nav.Link href="#">커뮤니티</Nav.Link>
              <Nav.Link href="#">인프런</Nav.Link>
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
            <Form>
              <Form.Control type="email" placeholder="이메일 또는 아이디 입력" /> <br />
              <Form.Control type="password" placeholder="비밀번호" /> <br />
              <div className="d-grid gap-2">
                <Button variant="success">로그인</Button> <br />
              </div>
              <p align="center">비밀번호 찾기 | 회원가입</p>
            </Form>
          </Modal.Body>
        </Modal>

        {/* 배너 */}
        <img src="https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202009/105721-239/zoom-%EC%88%98%EA%B0%95%EB%A3%8C-%EB%8C%80%ED%8F%AD%ED%95%A0%EC%9D%B8-%EB%9D%A0%EB%B0%B0%EB%84%88.png" width="100%" alt="banner" />

        {/* 강의 */}
        <Container style={{ marginTop: '2rem'}}>
          <h3 className="title is-4 is-spaced">여기서 시작해 보세요!
            <span className="courses_tag">Ready!!</span>
          </h3>
          <p className="subtext is-2">이미 검증된 쉽고 친절한 입문 강의!!</p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Card style={{ width: '45%' }}>
              <Card.Img variant="top" src="https://cdn.inflearn.com/public/roadmaps/3afa3070-7ec9-485e-9ca4-097a3b2b1a11/roadmap-122.png" />
              <Card.Body>
                <Card.Title>프로그래밍 시작하기 : 파이썬 입문 (Inflearn Original)</Card.Title>
                <Card.Text>인프런</Card.Text>
                <Button variant="success">바로 학습</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '45%' }}>
              <Card.Img variant="top" src="https://cdn.inflearn.com/public/roadmaps/466/cover/573a04e1-5309-4184-8277-95de50ceabf2/roadmap-152.png" />
              <Card.Body>
                <Card.Title>비전공자를 위한 진짜 입문 올인원 개발 클래스</Card.Title>
                <Card.Text>그랩</Card.Text>
                <Button variant="success">바로 학습</Button>
              </Card.Body>
            </Card>
          </div>
        </Container>

      </div>
  );
}

export default App;
