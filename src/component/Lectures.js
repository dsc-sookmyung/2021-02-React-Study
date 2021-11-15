import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card } from "react-bootstrap";

export default function Lectures() {
  return (
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
  );
}