import React from "react";
// import { NavLink } from "react-router-dom";
// import Services2 from "./Services_2";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import img1 from "./services_images/2.jpg";
import img2 from "./services_images/3.jpg";
import img3 from "./services_images/1.jpg";
import img4 from "./services_images/4.jpg";
import img5 from "./services_images/5.jpg";
import img6 from "./services_images/6.png";
import img7 from "./services_images/7.jpg";
import img8 from "./services_images/8.jpg";
import img9 from "./services_images/9.jpg";
import { Link } from "react-router-dom";

import "./services.css";

export default function services() {
  return (
    <div>
      <div>
        <div className="header_div">
          <Container>
            <h1>SERVICES</h1>
          </Container>
        </div>
        <div>
          <Container>
            <div className="row row_div">
              <div className="col-lg-4 col-md-4 col-sm-8 col-xsm-12">
                <div className="outer_div">
                  <div className="inner_div">
                    <div className="pic_div">
                      <img src={img1} alt="service-1" />
                    </div>
                    <h3>Cervical Traction</h3>
                    <p>
                      Cervical traction is a quick, easy treatment for neck pain
                      caused by lots of conditions. Your healthcare provider or
                      physical therapist can perform it during an office visit,
                      but you can also do it at home.
                    </p>
                    <div>
                      <Link to="cervical_traction">Read More ></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-8 col-xsm-12">
                <div className="outer_div">
                  <div className="inner_div">
                    <div className="pic_div">
                      <img src={img2} alt="service-2" />
                    </div>
                    <h3>Sport Injuries</h3>
                    <p>
                      Our physiotherapists have extensive training and
                      experience in treating sports injuries. Initially the
                      physiotherapist will perform an assessment to determine
                      the nature, severity and extent of your injury.
                    </p>
                    <div>
                      <Link to="sport_injuries">Read More ></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-8 col-xsm-12">
                <div className="outer_div">
                  <div className="inner_div">
                    <div className="pic_div">
                      <img src={img3} alt="service-3" />
                    </div>
                    <h3>Physiotherapy</h3>
                    <p>
                      Physiotherapy helps to restore normal movement and muscle
                      function when someone is affected by injury, illness or
                      disability. Physiotherapy help people achieve quality of
                      life through physical movement.
                    </p>
                    <div>
                      <Link to="physiotherapy">Read More ></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}

            <div className="row row_div">
              <div className="col-lg-4 col-md-4 col-sm-8 col-xsm-12">
                <div className="outer_div">
                  <div className="inner_div">
                    <div className="pic_div">
                      <img src={img4} alt="service-4" />
                    </div>
                    <h3>Osteoarthritis</h3>
                    <p>
                      Osteoarthritis (OA) is the most common form of arthritis.
                      Some people call it degenerative joint disease or “wear
                      and tear” arthritis. It occurs most frequently in the
                      hands, hips, and knees.
                    </p>
                    <div>
                      <Link to="osteoarthritis">Read More ></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-8 col-xsm-12">
                <div className="outer_div">
                  <div className="inner_div">
                    <div className="pic_div">
                      <img src={img5} alt="service-5" />
                    </div>
                    <h3>Rheumatoid arthritis</h3>
                    <p>
                      Rheumatoid arthritis, or RA, is an autoimmune and
                      inflammatory disease, which means that your immune system
                      attacks healthy cells in your body by mistake, causing
                      inflammation in the affected parts of the body.
                    </p>
                    <div>
                      <Link to="rheumatoid_arthritis">Read More ></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-8 col-xsm-12">
                <div className="outer_div">
                  <div className="inner_div">
                    <div className="pic_div">
                      <img src={img6} alt="service-6" />
                    </div>
                    <h3>Nerve impingement</h3>
                    <p>
                      A pinched nerve occurs when too much pressure is applied
                      to a nerve by surrounding tissues, such as bones,
                      cartilage, muscles or tendons. This pressure can cause
                      pain, tingling, numbness or weakness.
                    </p>
                    <div>
                      <Link to="nerve_impingement">Read More ></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}

            <div className="row row_div">
              <div className="col-lg-4 col-md-4 col-sm-8 col-xsm-12">
                <div className="outer_div">
                  <div className="inner_div">
                    <div className="pic_div">
                      <img src={img7} alt="service-7" />
                    </div>
                    <h3>Tendinitis</h3>
                    <p>
                      Tendinitis is inflammation or irritation of a tendon — the
                      thick fibrous cords that attach muscle to bone.Most cases
                      of tendinitis can be successfully treated with rest,
                      physical therapy and medications to reduce pain.
                    </p>
                    <div>
                      <Link to="tendinitis">Read More ></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-8 col-xsm-12">
                <div className="outer_div">
                  <div className="inner_div">
                    <div className="pic_div">
                      <img src={img8} alt="service-8" />
                    </div>
                    <h3>Edema</h3>
                    <p>
                      Edema is swelling caused by excess fluid trapped in your
                      body's tissues. Although edema can affect any part of your
                      body, you may notice it more in your hands, arms, feet,
                      ankles and legs.
                    </p>
                    <div>
                      <Link to="edema">Read More ></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-8 col-xsm-12">
                <div className="outer_div">
                  <div className="inner_div">
                    <div className="pic_div">
                      <img src={img9} alt="service-9" />
                    </div>
                    <h3>Neuropathy</h3>
                    <p>
                      Neuropathy is damage or dysfunction of one or more nerves
                      that typically results in numbness, tingling, muscle
                      weakness and pain in the affected area. It indicates a
                      problem within peripheral nervous system.
                    </p>
                    <div>
                      <Link to="neuropathy">Read More ></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
