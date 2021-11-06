import logo from './img/inflearn.PNG';
import image from './img/image.PNG';
import image2 from './img/image2.PNG';
import image3 from './img/image3.PNG';
import image4 from './img/image4.PNG';
import image5 from './img/image5.PNG';
import image6 from './img/image6.PNG';
import image7 from './img/image7.PNG';
import image8 from './img/image8.PNG';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.PNG';
import logo3 from './img/logo3.PNG';
import logo4 from './img/logo4.PNG';
import logo5 from './img/logo5.PNG';
import {React,useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Modal,CardGroup,Card,Carousel,Form,FormControl,Button,Nav, Navbar, NavDropdown, InputGroup} from 'react-bootstrap';
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';
import search from './search.svg';

function App(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pwd, setPwd] = useState('');
const [isRevealPwd, setIsRevealPwd] = useState(false);

  return(
    <div className="App">
      <Navbar className="justify-content-center" bg="white" variant="light" sticky="top">

        <Navbar.Brand href="/">
          <img src={logo} />
        </Navbar.Brand>

          <Nav style={{marginRight:"15pt"}}> 
            <NavDropdown title="강의"  style={{marginRight:"20pt"}}>
              <NavDropdown.Item href="강의/개발ㆍ프로그래밍">개발ㆍ프로그래밍</NavDropdown.Item>
              <NavDropdown.Item href="강의/보안ㆍ네트워크">보안ㆍ네트워크</NavDropdown.Item>
              <NavDropdown.Item href="강의/데이터 사이언스">데이터 사이언스</NavDropdown.Item>
              <NavDropdown.Item href="강의/크리에이티브">크리에이티브</NavDropdown.Item>
              <NavDropdown.Item href="강의/직무ㆍ마케팅">직무ㆍ마케팅</NavDropdown.Item>
              <NavDropdown.Item href="강의/학문ㆍ외국어">학문ㆍ외국어</NavDropdown.Item>
              <NavDropdown.Item href="강의/커리어">커리어</NavDropdown.Item>
              <NavDropdown.Item href="강의/교양">교양</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="로드맵"  style={{marginRight:"20pt"}}>로드맵</Nav.Link>
            <Nav.Link href="멘토링"  style={{marginRight:"20pt"}}>멘토링</Nav.Link>
            <NavDropdown title="커뮤니티" renderMenuOnMount={true}  style={{marginRight:"20pt"}}>
              <NavDropdown.Item href="커뮤니티/질문 &#38;답변">&nbsp;질문&#38;답변</NavDropdown.Item>
              <NavDropdown.Item href="커뮤니티/자유주제"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>&nbsp;자유주제</NavDropdown.Item>
              <NavDropdown.Item href="커뮤니티/스터디">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                </svg>&nbsp;스터디</NavDropdown.Item>
              <NavDropdown.Item href="커뮤니티/블로그"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg>&nbsp;블로그</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="인프런"  style={{marginRight:"20pt"}}>
              <NavDropdown.Item href="인프런/수강평"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>&nbsp;수강평</NavDropdown.Item>
              <NavDropdown.Item href="인프런/멘토링 후기"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
</svg>&nbsp;멘토링 후기</NavDropdown.Item>
              <NavDropdown.Item href="인프런/인프런 이야기"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg>&nbsp;인프런 이야기</NavDropdown.Item>
              <NavDropdown.Item href="인프런/인프런 채용"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg>&nbsp;인프런 채용</NavDropdown.Item>
              <NavDropdown.Item href="인프런/인프런 소개"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg>&nbsp;인프런 소개</NavDropdown.Item>
            </NavDropdown>
          
          
        <Form className="d-flex" style={{marginLeft:"40pt"}}>
          <InputGroup>
            <FormControl
              type="search"  aria-label="Search"/>
              <InputGroup.Text><img src={search}/></InputGroup.Text>
            </InputGroup>
      </Form>
        <Nav.Link href="지식공유참여"  style={{marginRight:"10pt",marginLeft:"10pt"}}>지식공유참여</Nav.Link>
        <Button variant="outline-secondary" style={{marginRight:"10pt"}} onClick={handleShow}>로그인</Button>

        <Modal show={show} onHide={handleClose} className="modalstyle">
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:"37%"}}><img src={logo} /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="이메일 또는 아이디 입력"/>
            </Form.Group>
            <InputGroup>
              <Form.Control
                name="pwd"
                placeholder="Enter Password"
                type={isRevealPwd ? "text" : "password"}
                value={pwd}
                onChange={e => setPwd(e.target.value)}/>
                <InputGroup.Text>
              <img width="20px" height="20px"
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd(prevState => !prevState)}
              /></InputGroup.Text>
              </InputGroup>
            <br/>
            <div className="d-grid gap-2" >
            <Button variant="success" type="submit" size="lg">
              로그인
            </Button>
            </div>
          </Form>
        </Modal.Body>
        <Navbar>
        <Navbar.Text class="textstyle">
        <a href="#비밀번호 찾기" class="href">비밀번호 찾기</a>&nbsp;<span>|</span>&nbsp;<a href="#회원가입" class="href">회원가입</a>
      </Navbar.Text>
        </Navbar>
        <br/>
        <Modal.Footer>
          <Navbar style={{marginLeft:"10pt"}}>
            <Nav>
            <Nav.Link><img src={logo1} style={{marginRight:"15pt"}}/></Nav.Link>
            <Nav.Link><img src={logo2} style={{marginRight:"15pt"}}/></Nav.Link>
            <Nav.Link><img src={logo3} style={{marginRight:"15pt"}}/></Nav.Link>
            <Nav.Link><img src={logo4}  style={{marginRight:"15pt"}}/></Nav.Link>
            <Nav.Link><img src={logo5}  style={{marginRight:"40pt"}}/></Nav.Link>        
          </Nav>
          </Navbar>
        </Modal.Footer>
      </Modal>


      <Button variant="danger" style={{marginRight:"10pt"}} onClick={handleShow}>회원가입</Button>

    </Nav>
      </Navbar>
      <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={image}/>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={image2}/>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={image3}/>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={image4}/>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={image5}/>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={image6}/>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={image7}/>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={image8}/>
          </Carousel.Item>
    </Carousel>
    <br/><br/>
    <CardGroup style={{margin:"10%"}}>
    <Card style={{marginRight:"40pt"}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>[초급-활용]</Card.Title>
          <Card.Text>
            딥러닝, 기초부터 컴퓨터 비전 전문가로 성장하기
          </Card.Text>
          <Button variant="primary">수강하기</Button>
        </Card.Body>
    </Card>
    <Card>
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title>[초급-중급]</Card.Title>
          <Card.Text>
            우아한형제들 개발팀장 김영한의 스프링 완전 정복
          </Card.Text>
          <Button variant="success">수강하기</Button>
        </Card.Body>
    </Card>
    </CardGroup>
    </div>
  );
}

export default App;