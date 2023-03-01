import React from "react";
import "./contact_section.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";

export default function contact_section() {
  return (
    <div>
      <div className="head3">
        <h1>Our Location</h1>
      </div>
      <div className="bg_div2">
        <div>
          <iframe
            src="https://maps.google.com/maps?q=Steve%20Flanders%20Square%20New%20York,%20NY%2010038,%20USA&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            id="gmap_canvas"
            title="gmap_canvas"
          ></iframe>
        </div>
      </div>
      {/* <div className="area">
        <Container>
          <div className="row">
            <div className="col-lg-4 col-md-4 contact_div">
              <span>
                <i class="fas fa-map-marker-alt"></i>Steve Flanders Square New
                York, NY 10038, USA
              </span>
            </div>
            <div className="col-lg-4 col-md-4 contact_div">
              <span>
                <i class="fas fa-phone-square-alt"></i>+ (12) 123 - 556 - 7890
              </span>
            </div>
            <div className="col-lg-4 col-md-4 contact_div">
              <span>
                <i class="fas fa-envelope"></i>info@orthovital.com
              </span>
            </div>
          </div>
        </Container>
      </div> */}
    </div>
  );
}
