import React from "react";
import Container from "react-bootstrap/Container";
import "./sport_injuries.css";
import main_img from "../../services_images/3.jpg";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function sport_injuries() {
  return (
    <div>
      <div className="header_div3">
        <Container>
          <h1>Sport Injuries</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div3">
            <div className="col-lg-7 col-md-7 col-sm-10 col-xsm-12">
              <div className="info_div2">
                <p>
                  <span style={{ fontSize: "26px", marginTop: 50 }}>
                    Sports injuries
                  </span>{" "}
                  occur during exercise or while participating in a sport.
                  Children are particularly at risk for these types of injuries,
                  but adults can get them, too. It can be done either by your
                  healthcare provider or by yourself at home. It can be done
                  manually (by hand) or with a cervical traction device. No
                  matter how it’s applied, cervical traction creates additional
                  space between the vertebrae in your neck to reduce pressure
                  and tension. It’s used to relieve symptoms like pain from a
                  variety of conditions and issues.
                  <br />
                  <br />
                </p>

                <div className="baner_div2">
                  <img src={main_img} alt="main_img" />
                </div>

                <h2>We specialise in Exercise Physiology and Sport Problems</h2>
                <p>
                  <b
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      color: "rgb(75, 75, 75)",
                      fontSize: "20px",
                      marginBottom: 10,
                    }}
                  >
                    Acute injuries
                  </b>
                  <br />
                  Acute injuries occur consequently of rapid trauma to muscle,
                  cartilage, disc, tendon or ligament.
                  <br />
                  <br />
                  <b
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      color: "rgb(75, 75, 75)",
                      fontSize: "20px",
                      marginBottom: 10,
                    }}
                  >
                    Surgical Rehabilitation
                  </b>
                  <br />
                  Surgical is the future a mature of rehabilitation is required
                  to construct strength, report and flexibility to ensure a safe
                  reward to your sport and allowing you to charity at your best.
                  <br />
                  <br />
                  <b
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      color: "rgb(75, 75, 75)",
                      fontSize: "20px",
                      marginBottom: 10,
                    }}
                  >
                    Chronic injuries
                  </b>
                  <br />
                  These injuries are often joined gone faulty biomechanics or
                  follow an initial acute offend.
                </p>
                <h2>Sport & Exercise Medicine Services</h2>
                <p>
                  Our specialist sports physio are highly experienced in the
                  assessment and treatment of soft tissue injuries, with award
                  winning knowledge of biomechanics, tissue pathology and
                  healing. They carry out a thorough assessment, treatment and
                  rehabilitation for all musculoskeletal injuries. <br />
                  It has survived not only five centuries. Lorem Ipsum is simply
                  dummy text of the new design printng and type setting Ipsum
                  take a look at our round. When an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting.
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-4 col-xsm-4">
              <div className="timing_div2">
                <div className="title2">
                  <h2>Opening Hours</h2>
                </div>
                <div className="time2">
                  <Table>
                    <tr>
                      <td>Monday</td>
                      <td>07:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>07:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td>07:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>07:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>07:00 - 15:00</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>07:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td> --Closed</td>
                    </tr>
                  </Table>
                </div>
              </div>

              <div className="booking2">
                <div className="need2">
                  <h4>Need Help ?</h4>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                    <br />+ (12) 123 - 556 - 7890
                  </p>
                </div>
                <div className="b_btn2">
                  <Link to="booking">
                    <button>Book Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
