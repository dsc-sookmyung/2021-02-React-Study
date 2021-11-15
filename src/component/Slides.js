import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import axios from "axios";

export default function Slides() {

  const [slides, setSlides] = useState([]);
  useEffect(() => {
    axios.get("http://52.79.159.99:8080/api/slide")
      .then(function(response) {
        setSlides(response.data);
      });
  }, []);

  return (
    <Carousel>
      {slides.map(slide => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.inflearn.com/public/main_sliders/6d5647cc-afa4-40fd-b924-25ec9972f7ac/%5B%ED%81%90%EB%A0%88%EC%9D%B4%EC%85%98%5D%EB%8F%85%EC%84%9C%EC%9D%98%EA%B3%84%EC%A0%88_main_521.png"
            alt="First slide"
            height="300px"
          />
          <h4 className="slide_caption" key={slide.key}>{slide.slide}</h4>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}