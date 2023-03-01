import React from "react";
import Container from "react-bootstrap/Container";
import "./contact.css";
import { Table } from "react-bootstrap";
export default function contact() {
  return (
    <div>
      <div className="header_div11">
        <Container>
          <h1>Contact</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div10">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xsm-4">
              <div className="contact_sidebar">
                <div className="address">
                  <span>
                    <i class="fas fa-map-marker-alt"></i>
                    <h5>Address</h5>
                  </span>
                  <h6>Steve Flanders Square New York, NY 10038, USA</h6>
                  <hr />
                </div>
                <div className="address">
                  <span>
                    <i class="fas fa-phone-square-alt"></i>
                    <h5>Phone</h5>
                  </span>
                  <h6>+ (12) 123 - 556 - 7890</h6>
                  <hr />
                </div>
                <div className="address">
                  <span>
                    <i class="fas fa-envelope"></i>
                    <h5>Email</h5>
                  </span>
                  <h6>info@orthovital.com</h6>
                  <hr />
                </div>
              </div>

              <div className="blog_sidebar" style={{ marginTop: 35 }}>
                <div className="title" style={{ marginTop: 20 }}>
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
            </div>

            <div className="col-lg-8 col-md-6 col-sm-8 col-xsm-12">
              <div className="blog1">
                <div>
                  <h2 id="map">Maps & Locations</h2>
                  <iframe
                    title="iframe1"
                    src="https://maps.google.com/maps?q=Steve%20Flanders%20Square%20New%20York,%20NY%2010038,%20USA&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    id="gmap_canvas2"
                  ></iframe>
                </div>
                <div className="comment">
                  <h2 id="contact_heading">Send us a Message</h2>
                  <p>
                    Feel free to ask any questions over the phone, or get in
                    touch via our contact form below. Your message will be
                    dispatched directly to our staff who will answer as soon as
                    they can.
                  </p>
                  <div className="field" style={{ marginTop: 20 }}>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-xsm-8">
                        <input id="c_name2" placeholder="Name" type="text" />

                        <input id="c_email2" placeholder="Email" type="email" />
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-xsm-8 c_col2">
                        <input type="number" id="phone2" placeholder="Phone" />
                        <input id="subject2" placeholder="Subject" type="text" />
                      </div>
                    </div>

                    <textarea
                      id="comment2"
                      placeholder="Message"
                      required
                    ></textarea>

                    <div>
                      <button type="button" id="send">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
