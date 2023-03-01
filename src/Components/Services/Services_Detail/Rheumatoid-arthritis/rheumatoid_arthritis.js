import React from "react";
import Container from "react-bootstrap/Container";
import "./rheumatoid_arthritis.css";
import main_img from "../../services_images/5.jpg";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function rheumatoid_arthritis() {
  return (
    <div>
      <div className="header_div5">
        <Container>
          <h1>Rheumatoid Arthritis</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div6">
            <div className="col-lg-7 col-md-7 col-sm-10 col-xsm-12">
              <div className="baner_div5">
                <img src={main_img} alt="main_img" />
              </div>
              <div className="info_div5">
                <p>
                  <span style={{ fontSize: "20px" }}>
                    Rheumatoid arthritis (RA){" "}
                  </span>
                  causes joint inflammation and pain. It happens when the immune
                  system doesn’t work properly and attacks the lining of the
                  joints, called the synovium. The disease commonly affects the
                  hands, knees or ankles, and usually the same joint on both
                  sides of the body, such as both hands or both knees. But
                  sometimes RA causes problems in other parts of the body as
                  well, such as the eyes, heart and circulatory system and/or
                  the lungs.
                  <br />
                  An autoimmune disorder, rheumatoid arthritis occurs when your
                  immune system mistakenly attacks your own body's tissues.
                  Unlike the wear-and-tear damage of osteoarthritis, rheumatoid
                  arthritis affects the lining of your joints, causing a painful
                  swelling that can eventually result in bone erosion and joint
                  deformity.
                </p>

                <h2>Causes of Rheumatoid Arthritis (RA)</h2>
                <p>
                  There are several ways to do cervical traction, either with a
                  physical therapist or on your own at home. Your physical
                  therapist can help you to decide upon the best method to suit
                  your needs. Your physical therapist may recommend that you buy
                  cervical traction equipment to use at home. Certain devices
                  may require you to have a prescription.
                </p>
                <h2>How is RA diagnosed ?</h2>
                <p>
                  RA is diagnosed by reviewing symptoms, conducting a physical
                  examination, and doing X-rays and lab tests. It’s best to
                  diagnose RA early—within 6 months of the onset of symptoms—so
                  that people with the disease can begin treatment to slow or
                  stop disease progression (for example, damage to joints).
                  Diagnosis and effective treatments, particularly treatment to
                  suppress or control inflammation, can help reduce the damaging
                  effects of RA. <br />
                  <br />A doctor or a team of doctors who specialize in care of
                  RA patients should diagnose and treat RA. This is especially
                  important because the signs and symptoms of RA are not
                  specific and can look like signs and symptoms of other
                  inflammatory joint diseases. Doctors who specialize in
                  arthritis are called rheumatologists, and they can make the
                  correct diagnosis.
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-4 col-xsm-4">
              <div className="timing_div5">
                <div className="title5">
                  <h2>Opening Hours</h2>
                </div>
                <div className="time5">
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

              <div className="booking5">
                <div className="need5">
                  <h4>Need Help ?</h4>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                    <br />+ (12) 123 - 556 - 7890
                  </p>
                </div>
                <div className="b_btn5">
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
