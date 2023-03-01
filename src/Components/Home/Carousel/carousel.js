import Carousel from "react-bootstrap/Carousel";
import React from "react";
import img_1 from "./carousel_images/1.jpg";
import img_2 from "./carousel_images/2.jpg";
import img_3 from "./carousel_images/3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.css";
import 'animate.css';

export default function carousel() {
  return (
    <Carousel className="mb-3">
      <Carousel.Item interval={3000}>
        <div className="c_div">
          <img
            className="d-block w-100"
            src={img_1}
            alt="First slide"
            heigth="740"
            
          />
          <div>
            <h1 className="animate__animated animate__fadeInUp animate__delay-0.5s">Welcome To Ortho <span>Vital</span></h1>
            <button className="animate__animated animate__fadeInUp animate__delay-0.6s">Discover More</button>
          </div>
        </div>
        
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="c_div">
          <img
            className="d-block w-100"
            src={img_2}
            alt="Second slide"
            heigth="740"
          />
          <div>
            <h1 className="animate__animated animate__fadeInUp animate__delay-3.7s">We Are Restoring Health Since Years   </h1>
            <button className="animate__animated animate__fadeInUp animate__delay-3.8s">Discover More</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="c_div">
          <img
            className="d-block w-100"
            src={img_3}
            alt="Third slide"
            heigth="740"
          />
          <div>
            <h1 className="animate__animated animate__fadeInUp animate__delay-7.1s">Natural Pain Relief for Hip Arthritis…</h1>
            <button className="animate__animated animate__fadeInUp animate__delay-7.3s">Discover More</button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
