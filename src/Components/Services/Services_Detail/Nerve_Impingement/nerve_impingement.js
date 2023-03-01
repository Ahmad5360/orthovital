import React from "react";
import Container from "react-bootstrap/Container";
import "./nerve_impingement.css";
import main_img from "../../services_images/6.png";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function nerve_impingement() {
  return (
    <div>
      <div className="header_div6">
        <Container>
          <h1>Nerve Impingement</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div7">
            <div className="col-lg-7 col-md-7 col-sm-10 col-xsm-12">
              <div className="baner_div6">
                <img src={main_img} alt="main_img" />
              </div>
              <div className="info_div6">
                <p>
                  <span style={{ fontSize: "20px" }}>Nerve impingement </span>
                  is yet another technical name for a pinched nerve, also known
                  as a compressed nerve or compressive neuropathy. Impingement
                  describes crowding or constriction of a neurological
                  structure, typically by a bulging disc or arthritic bone spur
                  complex. However, impingement can also take place by an
                  abnormal spinal curvature, a subluxated vertebra or even a
                  soft tissue pathology, such as a powerful back muscle spasm.
                  Just remember that impingement concerns, just like all
                  neurological diagnoses, are often incorrect or only partially
                  correct, leading the patient on an unnecessary quest for
                  treatment.
                  <br />
                  Impingement is an actual blockage in a nerve pathway enacted
                  by a structural concern. When the nerve can not relay
                  messages, it simply stops functioning. Impingement can also
                  occur in the spinal cord itself, which is the worst possible
                  case scenario. Being that the spinal cord controls virtually
                  all neurological processes, compression will usually enact
                  horrific symptomatic expressions anywhere in the body lower
                  than the narrowed canal location. This is called spinal
                  stenosis.
                </p>

                <h2>Impinged Nerve Guidance</h2>
                <p>
                  I see so many misdiagnosed back pain conditions blamed on
                  nerve compression issues, usually by chiropractors and
                  orthopedists. In most cases, there is some evidence that a
                  nerve is experiencing some crowding or the foraminal space is
                  narrowed, but there is no proof that compression exists.
                  Remember to compare the actual expected symptoms of a pinched
                  nerve at your theorized level to the actual symptoms you have.
                  In most cases, some will match, but you might have far more
                  symptoms than can be adequately explained using the structural
                  model of pain.
                </p>
                <h2>Nerve Impingement Diagnostic Conclusion</h2>
                <p>
                  The most common causes of nerve compression in the spine can
                  include any of the following causative mechanisms: Prolapsed
                  discs can bulge acutely into the spinal nerves or spinal cord.
                  Rarely are herniations the source of chronic pain due to
                  neurological constriction. However, they may elicit ongoing
                  neurological concerns, such as paresthesia and weakness in the
                  areas of the body served by the impinged nerve. Arthritic bone
                  spurs can crowd nerve roots or block the central canal.
                  <br />
                  <br />
                  Arthritic compression is difficult to treat nonsurgically and
                  may require back surgery. Anterolisthesis and retrolisthesis
                  can trap nerves or the spinal cord in the misaligned central
                  canal or in disjointed foramen when vertebral displacement is
                  severe.
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-4 col-xsm-4">
              <div className="timing_div6">
                <div className="title6">
                  <h2>Opening Hours</h2>
                </div>
                <div className="time6">
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

              <div className="booking6">
                <div className="need6">
                  <h4>Need Help ?</h4>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                    <br />+ (12) 123 - 556 - 7890
                  </p>
                </div>
                <div className="b_btn6">
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
