import React from "react";
import Container from "react-bootstrap/Container";
import "./osteoarthritis.css";
import main_img from "../../services_images/osteoarthritis.jpg";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function osteoarthritis() {
  return (
    <div>
      <div className="header_div4">
        <Container>
          <h1>Osteoarthritis</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div5">
            <div className="col-lg-7 col-md-7 col-sm-10 col-xsm-12">
              <div className="baner_div4">
                <img src={main_img} alt="main_img" />
              </div>
              <div className="info_div4">
                <p>
                  <span style={{ fontSize: "20px" }}>Osteoarthritis (OA) </span>
                  is the most common chronic joint condition. OA is also called
                  wear-and-tear arthritis, degenerative arthritis, and
                  degenerative joint disease. A joint is where two bones come
                  together. Cartilage is the protective tissue that covers the
                  ends of the bones. With OA, this cartilage breaks down,
                  causing the bones within the joint to rub together. This can
                  cause pain, stiffness, and other symptoms.
                  <br />
                  Osteoarthritis has often been referred to as a wear and tear
                  disease. But besides the breakdown of cartilage,
                  osteoarthritis affects the entire joint. It causes changes in
                  the bone and deterioration of the connective tissues that hold
                  the joint together and attach muscle to bone. It also causes
                  inflammation of the joint lining.
                </p>

                <h2>Exercises for Osteoarthritis</h2>
                <p>
                  Gentle stretching exercises can be very helpful if you have
                  OA, especially for stiffness or pain in your knees, hips, or
                  back. Stretching can help improve mobility and range of
                  motion. As with any exercise plan, check with your doctor
                  before beginning, to make sure it’s the right course of action
                  for you. If stretching exercises get the green light, try
                  these hip exercises.
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
              <div className="timing_div4">
                <div className="title4">
                  <h2>Opening Hours</h2>
                </div>
                <div className="time4">
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

              <div className="booking4">
                <div className="need4">
                  <h4>Need Help ?</h4>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                    <br />+ (12) 123 - 556 - 7890
                  </p>
                </div>
                <div className="b_btn4">
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
