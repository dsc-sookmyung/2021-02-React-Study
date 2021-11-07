import "../RecentLecture.css"
import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ChevronCompactRight } from "react-bootstrap-icons"

function RecentLecture(){
	return (	
		<div class="recent_lecture">
			<h3>나의 최근 학습 강의<ChevronCompactRight color="dimgray" size={30}/></h3>
			<div class="card_zone">
			<Card style={{ width: "20rem" }}>
				<Card.Img variant="top" src="https://cdn.inflearn.com/public/files/pages/16180410-868b-405b-8268-6fc3e523ef87/blog.png" />
				<Card.Body>
					<Card.Title>CSS 기본부터 활용까지</Card.Title>
					<Card.Text>
						기한: 무제한 | 진도율: 8.16%
					</Card.Text>
				</Card.Body>
				<Button class="btn btn-primary btn-block">바로 학습▶</Button>
			</Card>

			<Card style={{ width: "20rem" }}>
				<Card.Img variant="top" src="https://cdn.inflearn.com/public/files/pages/9a2643cb-3505-4751-97bd-338119ce5d67/[%EC%A3%BC%EA%B0%84%EC%9D%B8%ED%94%84%EB%9F%B0]_B_1200_628.png" />
				<Card.Body>
					<Card.Title>CSS 기본부터 활용까지</Card.Title>
					<Card.Text>
						기한: 2022.06.08 | 진도율: 93.75%
					</Card.Text>
				</Card.Body>
					<Button class="btn btn-primary btn-block">바로 학습▶</Button>
			</Card>
			</div>
	</div>
	);
}

export default RecentLecture;