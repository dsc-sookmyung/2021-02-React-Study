import React from "react";
import {
  Card,
  Row,
  Col,
  Button,
  ProgressBar,
  Container,
} from "react-bootstrap";
import "./App.css";
import { BsFillPlayFill } from "react-icons/bs";

function CardView() {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Img variant="top" src="card1.png" />
          <Card.Body>
            <Card.Title>생활코딩 - Linux</Card.Title>
            <Container className="card-bar">
              <Container className="card-progress">
                <Card.Text>기한 : 무제한 | 진도율 : 33.4%</Card.Text>
                <ProgressBar now={33.4} />
              </Container>
              <Button className="cardbtn">
                바로 학습
                <BsFillPlayFill />
              </Button>
            </Container>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img variant="top" src="card2.png" />
          <Card.Body>
            <Card.Title>
              Django 초보 가이드 - 실습을 통해 알아보는 장고 입문
            </Card.Title>
            <Container className="card-bar">
              <Container className="card-progress">
                <Card.Text>기한 : 무제한 | 진도율 : 33.4%</Card.Text>
                <ProgressBar now={82} />
              </Container>
              <Button className="cardbtn">
                바로 학습
                <BsFillPlayFill />
              </Button>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CardView;
