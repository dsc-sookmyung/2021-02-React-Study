import React from "react";

import { Carousel } from "react-bootstrap";

export const SlideView = () => (
  <Carousel>
    <Carousel.Item interval={8000}>
      <img className="d-block w-100" src="slide1.png" alt="First slide" />
    </Carousel.Item>
    <Carousel.Item interval={8000}>
      <img className="d-block w-100" src="slide2.png" alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item interval={8000}>
      <img className="d-block w-100" src="slide3.png" alt="Third slide" />
    </Carousel.Item>
  </Carousel>
);
