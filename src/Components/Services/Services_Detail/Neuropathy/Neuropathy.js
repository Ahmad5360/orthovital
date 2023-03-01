import React from "react";
import Container from "react-bootstrap/Container";
import "./Neuropathy.css";
import main_img from "../../services_images/9.jpg";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function neuropathy() {
  return (
    <div>
      <div className="header_div9">
        <Container>
          <h1>Neuropathy</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div10">
            <div className="col-lg-7 col-md-7 col-sm-10 col-xsm-12">
              <div className="baner_div9">
                <img src={main_img} alt="main_img" />
              </div>
              <div className="info_div9">
                <p>
                  <span style={{ fontSize: "22px" }}>Neuropathy </span>
                  is damage or dysfunction of one or more nerves that typically
                  results in numbness, tingling, muscle weakness and pain in the
                  affected area. Neuropathies frequently start in your hands and
                  feet, but other parts of your body can be affected too.
                  Neuropathy, often called peripheral neuropathy, indicates a
                  problem within the peripheral nervous system. Your peripheral
                  nervous system is the network of nerves outside your brain and
                  spinal cord. Your brain and spinal cord make up your central
                  nervous system.
                  <br />
                  <br />
                  In fact, neuropathy, which is sometimes referred to as
                  peripheral neuropathy, is not a single health condition but
                  rather a term used to describe a range of health problems
                  involving damage to the peripheral nerves, as well as the
                  symptoms of those issues. While the group of conditions is
                  irreversible, you can take steps to help prevent neuropathy or
                  manage it through diet, lifestyle, and treatment.
                </p>

                <h2>What does neuropathy feel like?</h2>
                <p>
                  If you have neuropathy, the most commonly described feelings
                  are sensations of numbness, tingling (“pins and needles”), and
                  weakness in the area of the body affected. Other sensations
                  include sharp, lightening-like pain; or a burning, throbbing
                  or stabbing pain.
                </p>
                <h2>Neuropathy Treatment </h2>
                <p>
                  Neuropathy can occur due to damage of the myelin, which is a
                  fatty layer of protection surrounding the nerves, or in severe
                  cases, nerve damage may occur. The body naturally can renew
                  myelin, so sometimes demyelination (loss of myelin) can heal
                  if the damage stops occurring. Usually, treatment of
                  neuropathy is focused on preventing nerve and myelin damage by
                  controlling the underlying cause. Symptomatic treatment is
                  usually necessary to relieve discomfort or pain.
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-4 col-xsm-4">
              <div className="timing_div9">
                <div className="title9">
                  <h2>Opening Hours</h2>
                </div>
                <div className="time9">
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

              <div className="booking9">
                <div className="need9">
                  <h4>Need Help ?</h4>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                    <br />+ (12) 123 - 556 - 7890
                  </p>
                </div>
                <div className="b_btn9">
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
