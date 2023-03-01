import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import Carousel from "./Carousel/carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import WOV from "./WOV/wov";
import Services from "./Services_Section/services_slider";
import Features from "./Features_Section/features";
import Intro from "./Intro_Section/intro";
import Whave from "./Wehave/whave";
import Testimonials from "./Testimonials/testimonials";
import Contact from "./Contact/contact_section";

export default function home() {
  return (
    <div>
      <Carousel />
      <NavLink to="/home"></NavLink>
      <Features />
      <Intro />
      <Services />
      <Whave />
      <WOV />
      <Testimonials />
      <Contact />
    </div>
  );
}
