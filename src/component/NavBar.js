import "../NavBar.css"
import { Form, Modal, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button"
import logo from "../img/logo.png"
import { Cart3, Bell } from "react-bootstrap-icons"
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

function NavBar(){
	const [show, setShow] = useState(false);
	
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  return(
		<>
			<Navbar bg="light" variant="light">
				<Navbar.Brand href="#home">
					<img alt=""
						src={logo}
						width="120"
					/>
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="lecture">강의</Nav.Link>
					<Nav.Link href="roadmap">로드맵</Nav.Link>
					<Nav.Link href="mentoring">멘토링</Nav.Link>
					<Nav.Link href="community">커뮤니티</Nav.Link>
					<Nav.Link href="inflearn">인프런</Nav.Link>
				</Nav>
				<Nav id="nav_right_side">
					<Button id="bt_login" variant="light" onClick={handleShow}>로그인</Button>
					<Button id="bt_signup" variant="danger" onClick={handleShow}>회원가입</Button>
					<Cart3 color="black" size={30} />
					<Bell color="black" size={30} />
				</Nav>
			</Navbar> 

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title><img src={logo} alt="" width="130"/></Modal.Title>
				</Modal.Header>
				<Modal.Body id="signin_window_body">
					<Form>
						<Form.Control type="text" placeholder="이메일 또는 아이디 입력"/>
						<Form.Control type="password" placeholder="비밀번호"/>
					</Form>
					<Button variant="success">로그인</Button>
					<div class="modal-bottom">
						<BrowserRouter>
							<Link to="#">비밀번호 찾기</Link> |&nbsp;
							<Link to="#">회원가입</Link>
						</BrowserRouter>
					</div>
				</Modal.Body>
					
			</Modal>
		</>
  );
}

export default NavBar;