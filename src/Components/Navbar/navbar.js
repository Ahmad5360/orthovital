import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        // fixed="top"
        className="py-3"
      >
        <Container>
          <Navbar.Brand>
            <h2>
              ORTHO <span>VITAL</span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={NavLink} to="/" id="navlinks">
                HOME
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" id="navlinks">
                SERVICES
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blog" id="navlinks">
                BLOG
              </Nav.Link>

              <Nav.Link as={NavLink} to="/machinery" id="navlinks">
                Machinery
              </Nav.Link>
              {/* <Nav.Link href="#test" id="navlinks">TESTIMONIALS</Nav.Link> */}
              <Nav.Link as={NavLink} to="/contact" id="navlinks">
                CONTACT
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" id="navlinks">
                ABOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div className="row area">
          <div className="col-lg-5 col-md-5 col-sm-8 contact_div">
            <span id="icon">
              <i class="fas fa-map-marker-alt"></i>Steve Flanders Square New
              York, NY 10038, USA
            </span>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-8 contact_div">
            <span id="icon">
              <i class="fas fa-phone-square-alt"></i>+ (12) 123 - 556 - 7890
            </span>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-8 contact_div">
            <span id="icon">
              <i class="fas fa-envelope"></i>info@orthovital.com
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}
