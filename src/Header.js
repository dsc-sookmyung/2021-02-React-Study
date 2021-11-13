import React from "react";
import {
  Button,
  Image,
  Navbar,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./Header.css";

function Header() {
  return (
    <div>
      <Navbar className="navbar" bg="white" variant="light">
        <Navbar.Brand m="5">
          <Image className="Navbar-logo" src="inflearn.png" height="25px" />
        </Navbar.Brand>
        <Navbar.Brand>강의</Navbar.Brand>
        <Navbar.Brand>로드맵</Navbar.Brand>
        <Navbar.Brand>멘토링</Navbar.Brand>
        <Navbar.Brand>커뮤니티</Navbar.Brand>
        <Navbar.Brand>인프런</Navbar.Brand>
        <InputGroup className="search">
          <FormControl />
          <InputGroup.Text id="">
            <BsSearch />
          </InputGroup.Text>
        </InputGroup>
        <Navbar.Brand>지식공유참여</Navbar.Brand>
        <Button className="login-btn" variant="light">
          로그인
        </Button>
        <Button variant="light" className="signin">
          회원가입
        </Button>
      </Navbar>
    </div>
  );
}

export default Header;
