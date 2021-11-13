import React from "react";

import { Carousel } from "react-bootstrap";

export const SlideView = () => (
  <Carousel>
    <Carousel.Item interval={8000}>
      <img src="https://cdn.inflearn.com/public/main_sliders/9aabdacd-591a-4ea9-99ce-593f6c29639a/hero-3-desktop.png" />
    </Carousel.Item>
    <Carousel.Item interval={8000}>
      <img src="https://cdn.inflearn.com/public/main_sliders/20a4e81d-c03d-4efa-bb72-8f253e5c14e4/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%89%E1%85%B5%E1%86%AB%E1%84%80%E1%85%B2%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4_521.gif" />
    </Carousel.Item>
    <Carousel.Item interval={8000}>
      <img src="https://cdn.inflearn.com/public/main_sliders/68a15e47-7f40-444c-af73-60ab1acb8b3f/%5B%EB%B8%8C%EB%9E%9C%EB%93%9C%5D%EC%B1%84%EC%9A%A9%EC%9D%B4%EB%AF%B8%EC%A7%80%26%EA%B4%91%EA%B3%A0%EB%A6%AC%EB%89%B4%EC%96%BC_main_521.gif" />
    </Carousel.Item>
  </Carousel>
);
