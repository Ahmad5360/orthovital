import React from "react";
import Container from "react-bootstrap/Container";
import "./edema.css";
import main_img from "../../services_images/8.jpg";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function edema() {
  return (
    <div>
      <div className="header_div8">
        <Container>
          <h1>Edema</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div9">
            <div className="col-lg-7 col-md-7 col-sm-10 col-xsm-12">
              <div className="baner_div8">
                <img src={main_img} alt="main_img" />
              </div>
              <div className="info_div8">
                <p>
                  <span style={{ fontSize: "22px" }}>Edema </span>
                  is swelling caused by excess fluid trapped in your body's
                  tissues. Although edema can affect any part of your body, you
                  may notice it more in your hands, arms, feet, ankles and legs.
                  Edema can be the result of medication, pregnancy or an
                  underlying disease — often congestive heart failure, kidney
                  disease or cirrhosis of the liver. Taking medication to remove
                  excess fluid and reducing the amount of salt in your food
                  often relieves edema. When edema is a sign of an underlying
                  disease, the disease itself requires separate treatment.
                  <br />
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

                <h2>How is edema treated?</h2>
                <p>
                  It’s important that your doctor identify the cause of your
                  edema so that it can be treated properly. Temporary edema can
                  often be improved by reducing your salt intake and keeping
                  your legs up when sitting.
                </p>
                <h2>Can edema be prevented?</h2>
                <p>
                  To prevent edema, stay as physically active as you’re able,
                  avoid excess sodium in your diet, and follow your doctor’s
                  orders regarding any conditions that cause edema.
                  <br />
                  In more specific cases, if you experience difficulty breathing
                  you should see a doctor immediately, as this may be a sign of
                  a pulmonary edema. Also, if you suddenly develop edema during
                  pregnancy, call your doctor immediately, as it may be a sign
                  of complications.
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-4 col-xsm-4">
              <div className="timing_div8">
                <div className="title8">
                  <h2>Opening Hours</h2>
                </div>
                <div className="time8">
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

              <div className="booking8">
                <div className="need8">
                  <h4>Need Help ?</h4>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                    <br />+ (12) 123 - 556 - 7890
                  </p>
                </div>
                <div className="b_btn8">
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
