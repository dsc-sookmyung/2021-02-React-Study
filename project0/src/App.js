import logo from './img/inflearn.PNG';
import image from './img/image.PNG';
import image2 from './img/image2.PNG';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.PNG';
import logo3 from './img/logo3.PNG';
import logo4 from './img/logo4.PNG';
import logo5 from './img/logo5.PNG';
import {React,useState,useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Modal,CardGroup,Card,Carousel,Form,FormControl,Button,Nav, Navbar,InputGroup} from 'react-bootstrap';
import search from './search.svg';
import axios from "axios";

function App(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [id,setId] = useState('');
  const [pwd, setPwd] = useState('');
  //const [isRevealPwd, setIsRevealPwd] = useState(false);

  const [headers, setHeaders] = useState([]);
  useEffect(() => {
    axios.get("http://52.79.159.99:8080/api/header")
      .then(function (response) {
        setHeaders(response.data);
      });
  }, []);
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    axios.get("http://52.79.159.99:8080/api/slide")
      .then(function(response) {
        setSlides(response.data);
      });
  }, []);
  const idChangeHandler = (e) => {
    setId(e.currentTarget.value);
  }

  const pwChangeHandler = (e) => {
    setPwd(e.currentTarget.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://52.79.159.99:8080/api/login",
    {
      username: id,
      password: pwd
    });
  }

  return(
    <div className="App">
      <Navbar className="justify-content-center" bg="white" variant="light" sticky="top">

        <Navbar.Brand href="/">
          <img src={logo} />
        </Navbar.Brand>

          <Nav style={{marginRight:"15pt"}}> 
            {headers.map(header => (
                <Nav.Link href="#" key={header.id}>{header.header}</Nav.Link>
              ))}
          
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
        <Form onSubmit={submitHandler}>
              <Form.Control type="text" name="username" value={id} onChange={idChangeHandler} placeholder="이메일 또는 아이디 입력" /> <br />
              <Form.Control type="password" name="password" value={pwd} onChange={pwChangeHandler} placeholder="비밀번호" /> <br />
              <div className="d-grid gap-2">
                <Button variant="success" type="submit" size="lg">로그인</Button>
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
      {slides.map(slide => (
            <Carousel.Item>
              <h4 className="slide_caption" key={slide.key}>{slide.slide}</h4>
              <img className="d-block w-100" src={image}/>
              </Carousel.Item>
               ))}
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