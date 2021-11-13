import React, { useState } from "react";
import {
  Button,
  Image,
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Modal,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./App.css";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  // const modalOpen = () => setPage(true);
  // const modalClose = () => setPage(false);

  // onOpenModal = () => {
  //   this.setState({ sign: true });
  // };

  // onCloseModal = () => {
  //   this.setState({ sign: false });
  // };

  return (
    <div>
      <Navbar className="navbar" bg="white" variant="light">
        <Navbar.Brand m="5">
          <Image className="Navbar-logo" src="inflearn.png" height="25px" />
        </Navbar.Brand>
        <Nav.Link>강의</Nav.Link>
        <Nav.Link>로드맵</Nav.Link>
        <Nav.Link>멘토링</Nav.Link>
        <Nav.Link>커뮤니티</Nav.Link>
        <Nav.Link>인프런</Nav.Link>
        <InputGroup className="search">
          <FormControl />
          <InputGroup.Text id="">
            <BsSearch />
          </InputGroup.Text>
        </InputGroup>
        <Nav.Link>지식공유참여</Nav.Link>
        <Button
          className="login"
          onClick={() => setModalOpen(true)}
          variant="light"
        >
          로그인
        </Button>
        <Button className="join" variant="light">
          회원가입
        </Button>
      </Navbar>

      <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
        <Modal.Header closeButton />
        <Modal.Body>
          <FormControl type="email" placeholder="이메일 혹은 아이디 입력" />
          <FormControl type="password" placeholder="비밀번호" />
          <Button variant="success">로그인</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
