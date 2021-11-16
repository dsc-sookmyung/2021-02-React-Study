import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col, Button, ProgressBar} from "react-bootstrap";
import '../css/Cards.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

class Cards extends Component{
	render(){
		return (
            <div className="container">
            <h3 className="title">나의 최근 학습 강의</h3>    
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="/2021-11-06-002622.png" />
                        <Card.Body>
                        <div className="card-top">
                           <Card.Title>BBC 인터랙티브 페이지 "코로나19가 바꿀 사무실의 미래" 클론</Card.Title>
                        </div>
                        <div className="card-bottom">
                            <span className="card_progress_cover">
                                <Card.Text>기한 : 무제한</Card.Text>
                                <Card.Text>진도율 : 75%</Card.Text>
                                <div><ProgressBar now={75} /></div>
                            </span>

                            <span className="card_button_cover">
                                <Button>바로 학습<FontAwesomeIcon icon={faCaretRight} className="playIcon" /></Button>
                            </span>
                        </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="/2021-11-06-002653.png" />
                        <Card.Body>
                        <div className="card-top">
                            <Card.Title>몇 줄로 끝내는 인터랙티브 웹 개발 노하우 [초급편]</Card.Title>
                        </div>
                        <div className="card-bottom">
                            <span className="card_progress_cover">
                                <Card.Text>기한 : 무제한</Card.Text>
                                <Card.Text>진도율 : 45%</Card.Text>
                                <div><ProgressBar now={45} /></div>
                            </span>

                            <span className="card_button_cover">
                                <Button>바로 학습<FontAwesomeIcon icon={faCaretRight} className="playIcon" /></Button>
                                
                            </span>
                        </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        );
    }
}

export default Cards;