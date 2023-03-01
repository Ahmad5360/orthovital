import React from "react";
import Container from "react-bootstrap/Container";
import "./physiotherapy.css";
import main_img from "../../services_images/1.jpg";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function physiotherapy() {
  return (
    <div>
      <div className="header_div4">
        <Container>
          <h1>Physiotherapy</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div4">
            <div className="col-lg-7 col-md-7 col-sm-10 col-xsm-12">
              <div className="baner_div3">
                <img src={main_img} alt="main_img" />
              </div>
              <div className="info_div3">
                <p>
                  <span style={{ fontSize: "20px" }}>Physiotherapy</span> is
                  helps to restore mobility and normalcy in a patient's life
                  after he/she is affected by an injury, disease or disability.
                  Components of a physiotherapy session include manual therapy,
                  advising and educating the patient. Physiotherapy can help a
                  patient of any age to manage further pain and prevent
                  subsequent injuries or diseases. In a nutshell, physiotherapy
                  helps a patient improve and maximize his/her physical
                  strength, functioning and general well-being while taking care
                  of the underlying issues.
                  <br />
                  It can be done either by your healthcare provider or by
                  yourself at home. It can be done manually (by hand) or with a
                  cervical traction device. No matter how it’s applied, cervical
                  traction creates additional space between the vertebrae in
                  your neck to reduce pressure and tension. It’s used to relieve
                  symptoms like pain from a variety of conditions and issues.
                </p>

                <h2>How long does a physiotherapy session last?</h2>
                <p>
                  The sessions of the physiotherapy last for about 30 minutes to
                  one hour depending upon the complexity of the disease. Some
                  patients tend to have longer hours and they are given clinical
                  support. Lasting up of physiotherapy depends upon the severity
                  or complexity of the disease and how much time does the body
                  part require to be healed. 6-8 weeks is the typical time taken
                  by the soft tissues to get healed.
                </p>
                <h2>How is physiotherapy done?</h2>
                <p>
                  A physiotherapist may employ a variety of techniques,
                  determined by the nature of the injury sustained and the
                  particular problem that is being treated. The commonest of
                  them are : <br />
                  <br />
                  <b
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      color: "rgb(75, 75, 75)",
                      fontSize: "20px",
                      marginBottom: 10,
                    }}
                  >
                    Manual Manipulation :{" "}
                  </b>
                  Moving the soft tissues and the joints better circulation,
                  flushes excess fluids from the body and relaxes overly tight
                  muscles and spasms. <br />
                  <br />
                  <b
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      color: "rgb(75, 75, 75)",
                      fontSize: "20px",
                      marginBottom: 10,
                    }}
                  >
                    Electrical Stimulation of the Nerves :{" "}
                  </b>
                  Delivering electric currents in controlled intensity to the
                  affected part helps to contain the pain signals, thus
                  preventing them from reaching the brain.
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
                    Acupuncture :{" "}
                  </b>
                  This is a great way of stimulating the CNS while dulling the
                  pain and relaxing tight muscles. Demonstration: Teaching and
                  demonstrating proper movement patterns to the patient help
                  them to recuperate on their own. Functional testing: This
                  involves examining the patient with regards to their physical
                  movements to better assess his/her condition.
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-4 col-xsm-4">
              <div className="timing_div3">
                <div className="title3">
                  <h2>Opening Hours</h2>
                </div>
                <div className="time3">
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

              <div className="booking3">
                <div className="need3">
                  <h4>Need Help ?</h4>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                    <br />+ (12) 123 - 556 - 7890
                  </p>
                </div>
                <div className="b_btn3">
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
