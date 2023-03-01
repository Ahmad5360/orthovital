import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    // <Footer fixed="bottom" className="footer">
    <div className="row">
      <div className="d-flex flex-column footer">
        {/* FOOTER  */}
        <footer className="w-100 py-3 flex-shrink-0">
          <div className="container py-3">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                <h5 className="h1 text-black">
                  <h2>
                    ORTHO <span>VITAL</span>
                  </h2>
                </h5>
                <p className="small text-muted">
                  Happiness is a condition of mental, physical, and profound
                  prosperity. Think pleasantly, engaging games, and read day by
                  day to upgrade your prosperity.
                </p>
                <p className="small text-muted mb-0">
                  &copy; Copyrights. All rights reserved.{"  "}
                  <span as={Link} to="/">
                    Orthovital.com
                  </span>
                </p>
              </div>

              <div className="col-lg-2 col-md-6">
                <h5 className="text-black mb-3">Follow Us</h5>
                <ul className="list-unstyled text-muted">
                  <Link as={Link} to="/">
                    {" "}
                    <i class="fab fa-facebook-f"></i>{" "}
                    <span id="s_icons">Facebook</span>{" "}
                  </Link>
                  <br />
                  <Link as={Link} to="/">
                    {" "}
                    <i class="fab fa-twitter"></i>
                    <span id="s_icons">Twitter</span>{" "}
                  </Link>
                  <br />
                  <Link as={Link} to="/">
                    {" "}
                    <i class="fab fa-instagram"></i>
                    <span id="s_icons">Instagram</span>{" "}
                  </Link>
                  <br />
                  <Link as={Link} to="/">
                    {" "}
                    <i class="fab fa-linkedin"></i>
                    <span id="s_icons">Linkedin</span>{" "}
                  </Link>
                  <br />
                  <Link as={Link} to="/">
                    {" "}
                    <i class="fab fa-pinterest"></i>
                    <span id="s_icons">Pinterest</span>{" "}
                  </Link>
                  <br />
                  <Link as={Link} to="/">
                    {" "}
                    <i class="fab fa-youtube"></i>
                    <span id="s_icons">Youtube</span>{" "}
                  </Link>
                  <br/>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6">
                <h5 className="text-black mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <NavLink to="/">HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">SERVICES</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">BLOG</NavLink>
                  </li>
                  <li>
                    <NavLink to="/machinery">MACHINERY</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">ABOUT</NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6">
                <h5 className="text-black mb-3">Join Our Newsletter</h5>
                <p className="small text-muted">
                  Join our mailing list to receive the latest news and updates
                  from our team.
                </p>
                <form action="#">
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Your Email"
                      aria-label="Enter Your Email"
                      aria-describedby="button-addon2"
                    />
                    <button className="btn" id="button-addon2" type="button">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    // </Footer>
  );
}
