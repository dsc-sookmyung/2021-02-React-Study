import React from 'react'
import {Navbar, Container, Nav, Button, Form, Modal, Carousel, Card, CardGroup } from 'react-bootstrap'
import { useState } from 'react';
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

function Inflearn() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="https://cdn.inflearn.com/public/files/pages/da35da48-52a5-4ec6-b8d3-0389a47610ec/logo1.png" width="100px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">강의</Nav.Link>
                    <Nav.Link href="#">로드맵</Nav.Link>
                    <Nav.Link href="#">멘토링</Nav.Link>
                    <Nav.Link href="#">커뮤니티</Nav.Link>
                <Nav.Link href="#">인프런</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <input></input>
                    <Nav.Link href="#">지식공유참여</Nav.Link>
                    <Button variant="outline-dark" size="sm" onClick={() => setModalShow(true)}>로그인</Button>
                    <Button variant="danger" size="sm">회원가입</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <Modal show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img src="https://cdn.inflearn.com/public/files/pages/da35da48-52a5-4ec6-b8d3-0389a47610ec/logo1.png" width="100px" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control type="email" placeholder="이메일 또는 아이디 입력" className="mb-2"/>
                        <Form.Control type="password" placeholder="비밀번호" className="mb-2"/> 
                        <div className="d-grid gap-2">
                            <Button variant="success" size="lg" className="mb-2">로그인</Button> 
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
            <Carousel>
                <Carousel.Item>
                    <img src="https://cdn.inflearn.com/public/main_sliders/20a4e81d-c03d-4efa-bb72-8f253e5c14e4/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%89%E1%85%B5%E1%86%AB%E1%84%80%E1%85%B2%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4_521.gif" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://cdn.inflearn.com/public/main_sliders/f57e3418-f145-43a4-89d6-f1c4f0293460/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A6%E1%84%80%E1%85%A6%E1%84%86%E1%85%A1%E1%86%BD%E1%84%82%E1%85%B3%E1%86%AB%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4_main_521.png" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://cdn.inflearn.com/public/main_sliders/68a15e47-7f40-444c-af73-60ab1acb8b3f/%5B%EB%B8%8C%EB%9E%9C%EB%93%9C%5D%EC%B1%84%EC%9A%A9%EC%9D%B4%EB%AF%B8%EC%A7%80%26%EA%B4%91%EA%B3%A0%EB%A6%AC%EB%89%B4%EC%96%BC_main_521.gif" />
                </Carousel.Item>
            </Carousel>

            <CardGroup>
                <Card>
                    <Card.Img  src="https://cdn.inflearn.com/public/courses/324951/course_cover/510c265a-6de2-456d-8e6a-351b9ce29608/nodeReactbasic.png" />
                    <Card.Body>
                    <Card.Title>실전 HTML & CSS 강좌</Card.Title>
                    <Card.Text>
                        기한: 무제한                        
                    </Card.Text>
                    <Button variant="success">바로 학습</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img  src="https://cdn.inflearn.com/wp-content/uploads/web1.png" />
                    <Card.Body>
                    <Card.Title>따라하며 배우는 노드, 리액트 시리즈</Card.Title>
                    <Card.Text>
                        기한: 무제한
                    </Card.Text>
                    <Button variant="success">바로 학습</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Inflearn
