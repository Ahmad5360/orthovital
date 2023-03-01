import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./intro.css";

export default function intro() {
  return (
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="bg_div">
            <div id="bg_img">
              <Container>
                <div className="col-md-6">
                  <div className="intro">
                    <h6>Introduction</h6>
                    <h1>Welcome to Physiotherapy & Chiroparctor Clinic</h1>
                    <p>
                      Ortho Vital is a multidisciplinary clinic that offers
                      evidence based care for musculoskeletal injuries such as
                      those of the neck, shoulders, low back, elbow, wrist,
                      hips, knees, and ankles. We are specialize in the
                      management and prevention of conditions arising from the
                      bones, joints, muscles, and ligaments.
                    </p>
                    <ul>
                      <li>
                        <i class="far fa-check-circle"></i>Refresing to get such
                        a personal touch.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <i class="far fa-check-circle"></i>Refresing to get such
                        a personal touch.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <i class="far fa-check-circle"></i>Refresing to get such
                        a personal touch.
                      </li>
                    </ul>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
