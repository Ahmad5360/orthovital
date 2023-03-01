import React, { Component } from "react";
import Slider from "react-slick";
import "./testimonials.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import t_1 from "./Patients-Images/2.jpg";
import t_2 from "./Patients-Images/4.jpg";
import t_3 from "./Patients-Images/1.png";
import t_4 from "./Patients-Images/3.png";

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
      dots: true,
      centerPadding: "60px",
      infinite: true,
      
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="body">
        <div className="head2">
          <h6>Our Testimonials</h6>
          <h1>What Our Patients Say ?</h1>
        </div>
        <Container>
          <Slider {...settings}>
            <div className="w_div2">
              <div className="con_div2">
                <div
                  className="offset-md-3 col-lg-6 col-md-6 col-sm-8 col-xsm-12"
                  id="div"
                >
                  <div className="img_div2">
                    <img src={t_1} alt="t-1" />
                  </div>
                  <p>
                    “From my work with lifting young children all day I have
                    struggled with back pain for many years. I’ve been to a
                    number of physiotherapy. I highly recommend FIX
                    physiotherapy as a friendly and helpful clinic. Thank you”
                  </p>
                  <div>
                    <h3>ROY MARTIN (PHYSIOTHERAPY TREATMENT)</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="w_div2">
              <div className="con_div2">
                <div
                  className=" col-md-3 offset-md-3 col-lg-6 col-md-6 col-sm-8 col-xsm-12"
                  id="div"
                >
                  <div className="img_div2">
                    <img src={t_2} alt="t-2" />
                  </div>
                  <p>
                    “From my work with lifting young children all day I have
                    struggled with back pain for many years. I’ve been to a
                    number of physiotherapy. I highly recommend FIX
                    physiotherapy as a friendly and helpful clinic. Thank you”
                  </p>
                  <h3>JASICA LENON (MANUAL TREATMENT)</h3>
                </div>
              </div>
            </div>

            <div className="w_div2">
              <div className="con_div2">
                <div
                  className=" col-md-3 offset-md-3 col-lg-6 col-md-6 col-sm-8 col-xsm-12"
                  id="div"
                >
                  <div className="img_div2">
                    <img src={t_3} alt="t-3" />
                  </div>
                  <p>
                    “From my work with lifting young children all day I have
                    struggled with back pain for many years. I’ve been to a
                    number of physiotherapy. I highly recommend FIX
                    physiotherapy as a friendly and helpful clinic. Thank you”
                  </p>
                  <h3>ALICE DOE (MESSAGE TREATMENT)</h3>
                </div>
              </div>
            </div>

            <div className="w_div2">
              <div className="con_div2">
                <div
                  className=" col-md-3 offset-md-3 col-lg-6 col-md-6 col-sm-8 col-xsm-12"
                  id="div"
                >
                  <div className="img_div2">
                    <img src={t_4} alt="t-4" />
                  </div>
                  <p>
                    “From my work with lifting young children all day I have
                    struggled with back pain for many years. I’ve been to a
                    number of physiotherapy. I highly recommend FIX
                    physiotherapy as a friendly and helpful clinic. Thank you”
                  </p>
                  <h3>ROY MARTIN (PHYSIOTHERAPY TREATMENT)</h3>
                </div>
              </div>
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}
