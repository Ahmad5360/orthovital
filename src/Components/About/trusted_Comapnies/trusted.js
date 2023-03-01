import React, { Component } from "react";
import Slider from "react-slick";
import "./trusted.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo1 from "./logos/logo1.jpg";
import Logo2 from "./logos/logo2.jpg";
import Logo3 from "./logos/logo3.jpg";
import Logo4 from "./logos/logo4.jpg";
import Logo5 from "./logos/logo5.jpg";
import Logo6 from "./logos/logo6.jpg";

export default class testimonials extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      centerPadding: "60px",
      infinite: true,

      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Container>
          <div>
            <Slider {...settings}>
              <div className="logos">
                <img src={Logo1} alt="Log0-1" />
              </div>
              <div className="logos">
                <img src={Logo2} alt="Logo-2" />
              </div>
              <div className="logos">
                <img src={Logo3} alt="Logo-3" />
              </div>
              <div className="logos">
                <img src={Logo4} alt="Logo-4" />
              </div>
              <div className="logos">
                <img src={Logo5} alt="Logo-5" />
              </div >
              <div className="logos">
                <img src={Logo6} alt="Logo-6" />
              </div>
              <div className="logos">
                <img src={Logo2} alt="Logo-2" />
              </div>
              <div className="logos">
                <img src={Logo3} alt="Logo-3" />
              </div>
              <div className="logos">
                <img src={Logo4} alt="Logo-4" />
              </div>
              <div className="logos">
                <img src={Logo5} alt="Logo-5" />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    );
  }
}
