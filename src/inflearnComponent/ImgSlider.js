import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap";
import '../css/ImgSlide.css';
import axios from 'axios';

class ControlledCarousel extends Component {

    state={
        slides: []
    }
    
    componentDidMount(){
        //클라이언트 GET API 요청(서버에 전달 데이터 없이 데이터 조회 "전체 데이터 조회")
        axios.get('http://52.79.159.99:8080/api/slide')
        //성공시 then 실행
        .then(response => {
            console.log(response);
            this.setState({slides: response.data});
        });
    }

    render(){

        let slides = this.state.slides.map(slide => (
            <Carousel.Item key={slide.id}>
                <img
                className="d-block w-100"
                src="/download (3).jpeg"
                alt="First slide"
                />
                    <Carousel.Caption>
                    <h3>{slide.id}</h3>
                    <p>{slide.slide}</p>
                    </Carousel.Caption>
            </Carousel.Item>
        ));

        return (
            <div style={{marginBottom : "70px"}}>
            <Carousel>
                {slides};
            </Carousel>
            </div>
        );
    }
}
  
export default ControlledCarousel;