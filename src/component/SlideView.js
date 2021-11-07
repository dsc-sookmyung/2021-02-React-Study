import { Carousel } from "react-bootstrap";
import slide1 from "../img/slide1.png"
import slide2 from "../img/slide2.png"
import slide3 from "../img/slide3.png"

function SlideView(){
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
	);
}

export default SlideView;