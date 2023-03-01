import React, { Component } from "react";
import Slider from "react-slick";
import "./services_slider.css";
import img1 from "./slider_images/1.jpg";
import img2 from "./slider_images/2.jpg";
import img3 from "./slider_images/3.jpg";
import img4 from "./slider_images/4.jpg";
import img5 from "./slider_images/5.jpg";
import img6 from "./slider_images/6.png";

export default class services_slider extends Component {
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
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,

      responsive: [
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 912,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
      <div>
        <div className="head2">
          <h6>Our Services</h6>
          <h1>What we Do ?</h1>
        </div>
        <Slider className="section" {...settings}>
          <div className="w_div">
            <div className="con_div">
              <div className="img_div">
                <img src={img1} alt="slider-1" />
              </div>
              <h3>Physiotherapy</h3>
              <p>
                Physiotherapy helps to restore normal movement and muscle
                function when someone is affected by injury, illness or
                disability. Physiotherapy help people achieve quality of life
                through physical movement.
              </p>
              {/* <div className="btn_div">
                <button type="button">Read More</button>
              </div> */}
            </div>
          </div>
          <div className="w_div">
            <div className="con_div">
              <div className="img_div">
                <img src={img2} alt="slider-1" />
              </div>
              <h3>Cervical Traction</h3>
              <p>
                Cervical traction is a quick, easy treatment for neck pain
                caused by lots of conditions. Your healthcare provider or
                physical therapist can perform it during an office visit, but
                you can also do it at home.
              </p>
              {/* <div className="btn_div">
                <button type="button">Read More</button>
              </div> */}
            </div>
          </div>
          <div className="w_div">
            <div className="con_div">
              <div className="img_div">
                <img src={img3} alt="slider-1" />
              </div>
              <h3>Sport Injuries</h3>
              <p>
                Our physiotherapists have extensive training and experience in
                treating sports injuries. Initially the physiotherapist will
                perform an assessment to determine the nature, severity and
                extent of your injury.
              </p>
              {/* <div className="btn_div">
                <button type="button">Read More</button>
              </div> */}
            </div>
          </div>
          <div className="w_div">
            <div className="con_div">
              <div className="img_div">
                <img src={img4} alt="slider-1" />
              </div>
              <h3>Osteoarthritis</h3>
              <p>
                Osteoarthritis (OA) is the most common form of arthritis. Some
                people call it degenerative joint disease or “wear and tear”
                arthritis. It occurs most frequently in the hands, hips, and
                knees.
              </p>
              {/* <div className="btn_div">
                <button type="button">Read More</button>
              </div> */}
            </div>
          </div>
          <div className="w_div">
            <div className="con_div">
              <div className="img_div">
                <img src={img5} alt="slider-1" />
              </div>
              <h3>Rheumatoid arthritis</h3>
              <p>
                Rheumatoid arthritis, or RA, is an autoimmune and inflammatory
                disease, which means that your immune system attacks healthy
                cells in your body by mistake, causing inflammation in the
                affected parts of the body.
              </p>
              {/* <div className="btn_div">
                <button type="button">Read More</button>
              </div> */}
            </div>
          </div>
          <div className="w_div">
            <div className="con_div">
              <div className="img_div">
                <img src={img6} alt="slider-1" />
              </div>
              <h3>Nerve impingement</h3>
              <p>
                A pinched nerve occurs when too much pressure is applied to a
                nerve by surrounding tissues, such as bones, cartilage, muscles
                or tendons. This pressure can cause pain, tingling, numbness or
                weakness.
              </p>
              {/* <div className="btn_div">
                <button type="button">Read More</button>
              </div> */}
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

// Services:
// Chest physiotherapy
// Cervical Traction
// Lumbar Traction
// Sports Injuries
// Low back pain & Neck Pain
// Knee problems
// Ankle and foot injuries
// Acupuncture
// Sciatica......
// Neuropathy
// Dics dislocation
// Nerve impingement
// Student's elbow
// Carpal tunnnel syndrome
// Edema
// Osteoarthritis
// Rheumatoid arthritis
// Bone fractures
// Tendinitis 
// Falt foot
// Club foot ,frozen shoulder, or paralysis
