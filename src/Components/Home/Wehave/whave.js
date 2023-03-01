import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./whave.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import i_1 from "./icons/therapist.png";
import i_2 from "./icons/customer-service.png";
import i_3 from "./icons/physical-therapy.png";

export default function Whave() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="contain">
      <Container>
        <div className="row">
          <div className="head">
            <h1>We have 15 years of experience
            </h1>
          </div>
          <div className="col-md-4 mt-5">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="count_div">
                <img src={i_1} alt="icon-1" />
                <h1> 
                  {counterOn && <CountUp start={0} end={70} duration={1} delay={0} />} Skilled Therapist
                </h1>
              </div>
            </ScrollTrigger>
          </div>

          <div className="col-md-4 mt-5">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="count_div">
                <img src={i_2} alt="icon-2" />
                <h1> 
                  {counterOn && <CountUp start={0} end={150} duration={1} delay={0} />} Happy Clients
                </h1>
              </div>
            </ScrollTrigger>
          </div>

          <div className="col-md-4 mt-5">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="count_div">
                <img src={i_3} alt="icon-3" />
                <h1> 
                  {counterOn && <CountUp start={0} end={200} duration={1} delay={0} />} + Solved Cases
                </h1>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </Container>
    </div>
  );
}
