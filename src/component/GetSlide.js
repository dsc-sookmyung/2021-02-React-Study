import React, { useCallback } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

import { useState, useEffect } from "react";

function GetSlide() {
  const [slides, setSlides] = useState();

  const getSlides = useCallback(async () => {
    try {
      const response = await axios.get("http://52.79.159.99:8080/api/slide");
      setSlides(response.data);
      console.log("after res", response);
    } catch (e) {
      console.log("서버에서 가져오는 동안 문제가 발생", e);
    }
  }, []);

  useEffect(() => {
    getSlides();
  }, []);

  console.log("slides", slides);

  return (
    <div>
      <Carousel>
        {slides &&
          slides.map((slides) => {
            return (
              <Carousel.Item key={slides.id}>{slides.slides}</Carousel.Item>
            );
          })}
      </Carousel>
    </div>
  );
}

export default GetSlide;
