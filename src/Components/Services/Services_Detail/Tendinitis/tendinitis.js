import React from "react";
import Container from "react-bootstrap/Container";
import "./tendinitis.css";
import main_img from "../../services_images/7.jpg";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function tendinitis() {
  return (
    <div>
      <div className="header_div7">
        <Container>
          <h1>Tendinitis</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div8">
            <div className="col-lg-7 col-md-7 col-sm-10 col-xsm-12">
              <div className="baner_div7">
                <img src={main_img} alt="main_img" />
              </div>
              <div className="info_div7">
                <p>
                  <span style={{ fontSize: "22px" }}>Tendinitis </span>
                  is inflammation or irritation of a tendon — the thick fibrous
                  cords that attach muscle to bone. The condition causes pain
                  and tenderness just outside a joint. While tendinitis can
                  occur in any of your tendons, it's most common around your
                  shoulders, elbows, wrists, knees and heels.
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

                <h2>Symptoms of Tendinitis</h2>
                <p>
                  The pain from tendinitis is typically a dull ache concentrated
                  around the affected area or joint. It increases when you move
                  the injured area. The area will be tender, and you’ll feel
                  increased pain if someone touches it. You may experience a
                  tightness that makes it difficult to move the area. You may
                  also have some swelling. If you develop symptoms of
                  tendinitis, begin by resting the area and applying ice. If
                  your condition doesn’t improve after a few days of rest, see a
                  doctor.
                </p>
                <h2>How is tendinitis diagnosed?</h2>
                <p>
                  At your appointment, a doctor will ask about your medical
                  history and perform a physical exam of the affected area.
                  They’ll also examine your tenderness and range of motion. Be
                  prepared to tell your doctor about the following: recent or
                  past injuries past and present sports and physical activities
                  previously diagnosed medical conditions any prescription
                  drugs, over-the-counter medications, and herbal supplements
                  you take If your doctor can’t make a diagnosis with a physical
                  exam, they may order additional tests.
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
              <div className="timing_div7">
                <div className="title7">
                  <h2>Opening Hours</h2>
                </div>
                <div className="time7">
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

              <div className="booking7">
                <div className="need7">
                  <h4>Need Help ?</h4>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                    <br />+ (12) 123 - 556 - 7890
                  </p>
                </div>
                <div className="b_btn7">
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
