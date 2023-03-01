import React from "react";
import Container from "react-bootstrap/Container";
import "./cervical_traction.css";
import main_img from "../../services_images/2.jpg";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function cervical_traction() {
  return (
    <div>
      <div className="header_div2">
        <Container>
          <h1>Cervical Traction</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div2">
            <div className="col-lg-7 col-md-7 col-sm-10 col-xsm-12">
              <div className="baner_div">
                <img src={main_img} alt="main_img" />
              </div>
              <div className="info_div">
                <p>
                  <span style={{ fontSize: "20px" }}>Cervical Traction</span> is
                  a quick, easy treatment for neck pain caused by lots of
                  conditions. Your healthcare provider or physical therapist can
                  perform it during an office visit, but you can also do it at
                  home. Talk to your healthcare provider before using an at-home
                  cervical traction device.
                  <br />
                  It can be done either by your healthcare provider or by
                  yourself at home. It can be done manually (by hand) or with a
                  cervical traction device. No matter how it’s applied, cervical
                  traction creates additional space between the vertebrae in
                  your neck to reduce pressure and tension. It’s used to relieve
                  symptoms like pain from a variety of conditions and issues.
                </p>

                <h2>Benefits of Cervical Traction</h2>
                <p>
                  Cervical traction devices treat different types and causes of
                  neck pain, tension, and tightness. Cervical traction helps to
                  relax the muscles, which can significantly relieve pain and
                  stiffness while increasing flexibility.It’s also used to treat
                  and flatten bulging or herniated disks. It can alleviate pain
                  from joints, sprains, and spasms. It’s also used to treat neck
                  injuries, pinched nerves, and cervical spondylosis.
                </p>
                <h2>How It's Done ?</h2>
                <p>
                  There are several ways to do cervical traction, either with a
                  physical therapist or on your own at home. Your physical
                  therapist can help you to decide upon the best method to suit
                  your needs. Your physical therapist may recommend that you buy
                  cervical traction equipment to use at home. Certain devices
                  may require you to have a prescription. <br />
                  <br />
                  Cervical traction devices are available online and in medical
                  supply stores. Your physical therapist should show you how to
                  use the device properly before you use it on your own. It’s
                  important that you check in with your physical therapist even
                  if you’re doing a home treatment. They’ll make sure you’re
                  doing the best treatment, measure your progress, and adjust
                  your therapy as necessary.
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-4 col-xsm-4">
              <div className="timing_div">
                <div className="title">
                  <h2>Opening Hours</h2>
                </div>
                <div className="time">
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

              <div className="booking">
                <div className="need">
                  <h4>Need Help ?</h4>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                    <br />+ (12) 123 - 556 - 7890
                  </p>
                </div>
                <div className="b_btn">
                  <Link to="booking" >
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
