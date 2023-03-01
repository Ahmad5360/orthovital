import React from "react";
import Container from "react-bootstrap/Container";
import "./machinery.css";
import m1 from "./images/m1.jpg";
import m2 from "./images/m2.jpg";
import m3 from "./images/m3.jpg";
import m4 from "./images/m4.jpg";
import m5 from "./images/m5.jpg";
export default function machinery() {
  return (
    <div>
      <div className="header_div11">
        <Container>
          <h1>Machinery</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div10">
            <div className="col-lg-8 col-md-6 col-sm-8 col-xsm-12">
              <div className="machinery_div">
                <p>
                  The right equipment is essential for a clinic that provides
                  physical therapy, and choosing the right medical gear for your
                  business is rarely simple. High-quality systems often command
                  high prices, and ensuring you have the tools you need to help
                  patients with both occupational health development and
                  recovery is essential. You don’t have to break the bank to
                  acquire the best physical therapy equipment, but you do need
                  to be sure that your equipment is made of sturdy material that
                  can withstand regular use by patients with a variety of
                  different needs and body types.
                </p>
                <h2>NordicTrack</h2>
                <img src={m1} alt="machine-1" />
                <p>
                  One of the classic exercise systems found in many of the best
                  physical rehabilitation centers in the US, the NordicTrack
                  Classic Pro Skier is a great tool for helping patients develop
                  strength, stamina, and coordination. The intensity of the
                  workout is easily adjustable, allowing your patients to adjust
                  the tension on the arms and skis to match their current levels
                  of development. NordicTrack offers a variety of rehab
                  equipment and physical therapy equipment for sale, and the
                  Classic Pro Skier is one of its most iconic and practical
                  models. The smooth gliding motion makes it easy to perform
                  necessary movements without jarring or causing discomfort for
                  recovering patients.
                </p>
                <h3>Benefits</h3>
                <p>
                  NordicTrack systems offer three clear benefits that you may
                  not find in other like equipment :
                  <ul>
                    <li>
                      Since you use both your arms and legs at the same time,
                      you burn more calories.
                    </li>
                    <li>
                      The low-impact workout it offers is perfect for seniors
                      and patients who require physical therapy to recuperate
                      from an injury.
                    </li>
                    <li>
                      The machines’ high-quality construction ensures that it
                      will hold up to vigorous day-to-day use in your busy
                      clinic environment.
                    </li>
                  </ul>
                </p>
              </div>

              <div className="machinery_div">
                <h2>Treatment Tables</h2>
                <img src={m2} alt="machine-2" />
                <p>
                  Tables for treatment are not optional in a professional
                  physical rehabilitation center, as you must ensure that
                  patients can rest comfortably or sit in a variety of positions
                  as you administer occupational or rehabilitation therapies.
                  Quality treatment tables need to be sturdy enough to hold
                  heavy patients and have plenty of padding to ensure that no
                  undue stress is placed upon those who must sit on the surface
                  for prolonged periods. ScripHessco offers a variety of
                  different examination and treatment tables designed for
                  medical use. These heavy-duty options provide all the padding
                  and support necessary to help your patients feel as
                  comfortable as possible while undergoing treatment.
                </p>
              </div>

              <div className="machinery_div">
                <h2>Exercise Bike</h2>
                <img src={m3} alt="machine-3" />
                <p>
                  The exercise bike is another piece of equipment found in most
                  modern physical therapy centers. This invaluable tool is a
                  great way to help patients recover from foot, leg, and ankle
                  therapies as well as build stamina and strength throughout
                  their legs. Theracycle produces a wide selection of
                  professional-grade exercise bikes designed to help patients in
                  a variety of ways. Advanced models provide real-time feedback
                  regarding the health and fitness level of the user, giving you
                  the tools you need for constant evaluation of progress
                  throughout the rehabilitation process. Even though the bike
                  can be tough on those with knee pain when bending the long
                  term benefits are worth fighting for.
                </p>
                <p>
                  Many physical therapists prefer recumbent stationary bicycles
                  over upright bicycles for recovering patients, as they :
                  <ul>
                    <li>Are ideal for use with all age groups</li>
                    <li>Encourage thoracic and lumbar flexion</li>
                    <li>Helps to keep a stable zone of apposition</li>
                  </ul>
                </p>
              </div>

              <div className="machinery_div">
                <h2>Electrical Muscle Stimulation</h2>
                <img src={m4} alt="machine-4" />
                <p>
                  Electrical muscle stimulation is commonly used after an
                  accident or severe injury to help promote muscle growth and
                  fight off muscular atrophy. A skilled physiotherapist can use
                  electrical stimulation equipment to help rebuild basic tone
                  and strength in muscles that have gone unused or were severely
                  damaged in the recent past. These devices are commonly used in
                  the early stages of physical therapy when traditional exercise
                  options are unavailable due to extreme weakness in necessary
                  muscle groups. DJO Global sells many different electrical
                  muscle stimulation devices, letting you pick the right setup
                  for your company’s needs. These range from intensive systems
                  that provide multiple simultaneous stimulation points to more
                  basic models and accessories.
                </p>
              </div>

              <div className="machinery_div">
                <h2>Ultrasound</h2>
                <img src={m5} alt="machine-5" />
                <p>
                  Ultrasound equipment has a variety of different uses and has
                  become increasingly common in physical therapy. Ultrasound
                  therapy is used to treat various injuries, and viewing
                  equipment that uses ultrasonic technology can help you
                  identify areas of poor blood flow or stressed, cracked, or
                  fractured areas under the skin. Mettler Electronics Corp.
                  offers some of the most up-to-date ultrasonic equipment to
                  help ensure that your clinic can perform these advanced
                  therapy techniques.
                </p>
                <p>
                  Therapeutic ultrasound is generally used to treat :
                  <ul>
                    <li>Tightness or contracture of the joints</li>
                    <li>Frozen shoulders</li>
                    <li>Ligament injuries and sprains</li>
                    <li>Tendonitis</li>
                    <li>Bursitis</li>
                    <li>Strains and tears of the muscles</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
