import React from "react";
import Container from "react-bootstrap/Container";
import "./about.css";
import doc_1 from "../Home/WOV/experts_images/doc-1.jpg";
import doc_2 from "../Home/WOV/experts_images/doc-2.jpg";
import doc_3 from "../Home/WOV/experts_images/doc-3.jpg";
import doc_4 from "../Home/WOV/experts_images/doc-4.jpg";
import img1 from "../Blog/Images/post4.jpg";
import img2 from "./images/about_img1.jpg";
import img3 from "./images/about_img2.jpg";
import Trusted from "./trusted_Comapnies/trusted";
export default function about() {
  return (
    <div>
      <div className="header_div11">
        <Container>
          <h1>About</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div10">
            <div className="col-lg-6 col-md-6 col-sm-8 col-xsm-12">
              <div className="about_div">
                <div className="about_head">
                  <h3>
                    Welcome To Ortho{" "}
                    <span>Vital</span>
                  </h3>
                  <span>
                    <hr />
                  </span>
                </div>
                <p>
                  <span style={{ fontSize: "22px" }}>Ortho Vital</span> is a
                  multidisciplinary clinic that offers evidence based care for
                  musculoskeletal injuries such as those of the neck, shoulders,
                  low back, elbow, wrist, hips, knees, and ankles. We are
                  specialize in the management and prevention of conditions
                  arising from the bones, joints, muscles, and ligaments. In
                  addition, we have a niche in postsurgical rehab, chronic pain
                  management, and motor vehicle accident injuries. We also treat
                  and manage workplace injuries.
                  <br /> <br />
                  As a healthcare leader we partner with groups and events
                  within the communities we serve. Our focus on our physical
                  therapists continuing education is unmatched and guarantees
                  our physical therapists understand and put into practice
                  cutting-edge treatments and rehabilitation techniques
                  available for all types of injuries and conditions.
                </p>
              </div>

              <div className="mission_img">
                <img src={img2} id="mission_img" alt="mission-img" />
              </div>

              <div className="mission_text">
                <div className="mission_head">
                  <h3>
                    Our <span>Vision</span>
                  </h3>
                  <span>
                    <hr />
                  </span>
                </div>
                <p>
                  To be a company that attracts, rewards, and retains highly
                  skilled physical therapy staff. Our proactive approach to the
                  development of best business practices and promotion of
                  effective treatment methods will help us accomplish this.
                  <br />
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Nullam id dolor id nibh ultricies vehicula ut
                  id elit. Maecenas faucibus mollis interdum. Praesent commodo
                  cursus magna. Donec sed odio dui.Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur et. Nullam id dolor id
                  nibh ultricies vehicula ut id elit. Maecenas faucibus mollis
                  interdum. Praesent commodo cursus magna. Donec sed odio
                  dui.Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Nullam id dolor id nibh ultricies vehicula ut
                  id elit. Maecenas faucibus mollis interdum. Praesent commodo
                  cursus magna. Donec sed odio dui.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8 col-xsm-12">
              <div className="about_1">
                <img src={img1} id="about_img" alt="About-1" />
              </div>

              <div className="mission_text">
                <div className="mission_head">
                  <h3>
                    Our <span>Mission</span>
                  </h3>
                  <span>
                    <hr />
                  </span>
                </div>
                <p>
                  We are committed as primary healthcare professionals to help
                  our clients resume their lifelong pursuit of health, fitness,
                  and well-being.
                  <br /> <b>High Quality </b> <br /> We take a goal-oriented
                  approach to healing. Whatever your goals might be we want to
                  help you achieve them. <br /> <b>Patient Care </b> <br />{" "}
                  We’ll provide hands-on treatment in the office and education
                  you can take home with you, enabling you to become an active
                  participant in your recovery and future physical health.
                  <br /> <b>Professional Service</b>
                  <br />
                  Our five physical therapists have a combined 120 years of
                  clinical experience and a shared passion for helping our
                  community stay active.
                </p>
              </div>

              <div className="mission_img">
                <img src={img3} id="vision_img" alt="vision-img" />
              </div>
            </div>

            <div className="row">
              <div className="experts">
                <h1>Meet Our <span>Experts</span></h1>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="div_1">
                  <div className="i_div">
                    <img src={doc_1} alt="doc-1" />
                  </div>
                  <div className="content">
                    <h3>Jane Doe</h3>
                    <h4>Physiotherapist</h4>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et.Praesent commodo cursus magna, vel
                      scelerisque nisl consectetur et.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="div_1">
                  <div className="i_div">
                    <img src={doc_2} alt="doc_2" />
                  </div>
                  <div className="content">
                    <h3>John Alex</h3>
                    <h4>Physiotherapist</h4>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et.Praesent commodo cursus magna, vel
                      scelerisque nisl consectetur et.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="div_1">
                  <div className="i_div">
                    <img src={doc_3} alt="doc_3" />
                  </div>
                  <div className="content">
                    <h3>Mike Smith</h3>
                    <h4>Physiotherapist</h4>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et.Praesent commodo cursus magna, vel
                      scelerisque nisl consectetur et.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="div_1">
                  <div className="i_div">
                    <img src={doc_4} alt="doc_4" />
                  </div>
                  <div className="content">
                    <h3>Dr. Jehrome</h3>
                    <h4>Physiotherapist</h4>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et.Praesent commodo cursus magna, vel
                      scelerisque nisl consectetur et.
                    </p>
                  </div>
                </div>
              </div>

              <div className="trusted_head">
                <h1>Trusted By <span>International</span> Companies</h1>
              </div>
              <div className="trusted_slider">
                <div className="trusted_companies">
                  <Trusted/>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
