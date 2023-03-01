import React from "react";
import "./blog.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import post1 from "./Images/post1.jpg";
import post2 from "./Images/post2.jpg";
import post3 from "./Images/post3.jpg";
import post4 from "./Images/post5.jpg";

export default function blog() {
  return (
    <div>
      <div className="header_div11">
        <Container>
          <h1>Blog</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div10">
            <div className="col-lg-6 col-md-6 col-sm-8 col-xsm-12">
              <div className="blog1">
                <div className="blog1_img">
                  <img src={post1} alt="post1" />
                </div>
                <div className="autor_div">
                  <i class="fas fa-user"></i> <span>Admin</span>
                  <i class="fas fa-comments"></i>
                  <span>4 Comments</span>
                  <i class="far fa-calendar-alt"></i>
                  <span>13 Sep 2022</span>
                  <hr />
                </div>
                <div className="blog_content">
                  <div className="blog_title">
                    <h3>How Physiotherapists Help Sports Energy</h3>
                  </div>
                  <div className="blog_info">
                    <p>
                      Tri-tip ribeye shoulder sirloin pork chop t-bone. Venison
                      ground round strip steak jowl rump biltong. Tenderloin
                      filet mignon turducken shank cow. Ball tip cow capicola
                      hamburger tenderloin, biltong jerky chuck turducken
                      kielbasa corned beef....
                    </p>
                  </div>
                  <div className="readmore">
                    <Link to="post1">Read More ></Link>
                  </div>
                </div>
              </div>

              <div className="blog1">
                <div className="blog1_img">
                  <img src={post2} alt="post2" />
                </div>
                <div className="autor_div">
                  <i class="fas fa-user"></i> <span>Admin</span>
                  <i class="fas fa-comments"></i>
                  <span>6 Comments</span>
                  <i class="far fa-calendar-alt"></i>
                  <span>14 Sep 2022</span>
                  <hr />
                </div>
                <div className="blog_content">
                  <div className="blog_title">
                    <h3>Therapy Found Effective for Carpal Tunnel Syndrome</h3>
                  </div>
                  <div className="blog_info">
                    <p>
                      Customized physical therapy may be a useful way to ease
                      low back pain, which affects an estimated 31 million
                      Americans a new study says. Researchers from La Trobe
                      University observed that ‘many patients with low-back
                      disorders persisting beyond 6 weeks do not recover.....
                    </p>
                  </div>
                  <div className="readmore">
                    <Link to="post2">Read More ></Link>
                  </div>
                </div>
              </div>

              <div className="blog1">
                <div className="blog1_img">
                  <img src={post3} alt="post3" />
                </div>
                <div className="autor_div">
                  <i class="fas fa-user"></i> <span>Admin</span>
                  <i class="fas fa-comments"></i>
                  <span>2 Comments</span>
                  <i class="far fa-calendar-alt"></i>
                  <span>14 Sep 2022</span>
                  <hr />
                </div>
                <div className="blog_content">
                  <div className="blog_title">
                    <h3>
                      Myth: Physical Therapy is only for Injuries and Accidents
                    </h3>
                  </div>
                  <div className="blog_info">
                    <p>
                      Physical therapists do a lot more than just stretch or
                      strengthen weak muscles after an injury or surgery. They
                      are skilled at evaluating and diagnosing potential
                      problems before they lead to more-serious injuries or
                      disabling conditions from carpal tunnel syndrome or a
                      frozen shoulder to chronic headaches or lower-back....
                    </p>
                  </div>
                  <div className="readmore">
                    <Link to="post3">Read More ></Link>
                  </div>
                </div>
              </div>

              <div className="blog1">
                <div className="blog1_img">
                  <img src={post4} alt="post4" />
                </div>
                <div className="autor_div">
                  <i class="fas fa-user"></i> <span>Admin</span>
                  <i class="fas fa-comments"></i>
                  <span>10 Comments</span>
                  <i class="far fa-calendar-alt"></i>
                  <span>15 Sep 2022</span>
                  <hr />
                </div>
                <div className="blog_content">
                  <div className="blog_title">
                    <h3>Avoiding Low Back Injuries With Squatting</h3>
                  </div>
                  <div className="blog_info">
                    <p>
                      Let’s talk about 3 tips to get rid of lower back pain from
                      squats. In most cases, pain from squatting comes to
                      technical errors; whether the pain is in the lower back or
                      in the knees. Sometimes, the lower back pain can actually
                      originate from the hips....
                    </p>
                  </div>
                  <div className="readmore">
                    <Link to="post4">Read More ></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="offset-lg-1 offset-md-1 col-lg-5 col-md-5 col-sm-4 col-xsm-4">
              <div className="blog_sidebar">
                {/* <div className="search_title">
                  <h2></h2>
                </div> */}
                <div className="search_bar">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="blog_sidebar2" style={{ marginTop: 50 }}>
                <div>
                  <div className="cat_title">
                    <h4>Category</h4>
                  </div>
                  <div className="category_list">
                    <ul>
                      <li>
                        <i class="fas fa-chevron-circle-right"></i>Pain
                      </li>
                      <li>
                        <i class="fas fa-chevron-circle-right"></i>
                        Rehabilitation
                      </li>
                      <li>
                        <i class="fas fa-chevron-circle-right"></i>Senior
                        Citizen
                      </li>
                      <li>
                        <i class="fas fa-chevron-circle-right"></i>Sports
                        Injuries
                      </li>
                      <li>
                        <i class="fas fa-chevron-circle-right"></i>Tips
                      </li>
                      <li>
                        <i class="fas fa-chevron-circle-right"></i>Edema
                        Patients
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="booking">
                <div className="need">
                  <h4>Need Help ?</h4>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                    <br />+ (12) 123 - 556 - 7890
                  </p>
                </div>
                <div className="b_btn">
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
