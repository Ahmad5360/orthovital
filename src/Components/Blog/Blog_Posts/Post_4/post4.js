import React from "react";
import Container from "react-bootstrap/Container";
import post4 from "../../Images/post5.jpg";

export default function post_4() {
  return (
    <div>
      <div className="header_div11">
        <Container>
          <h1>Avoiding Low Back Injuries With Squatting</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div10">
            <div className="col-lg-6 col-md-6 col-sm-8 col-xsm-12">
              <div className="blog1">
                <div className="blog1_img">
                  <img src={post4} alt="post1" />
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
                  <div className="blog_info">
                    <p>
                      Let’s talk about 3 tips to get rid of lower back pain from
                      squats. In most cases, pain from squatting comes to
                      technical errors; whether the pain is in the lower back or
                      in the knees. Sometimes, the lower back pain can actually
                      originate from the hips.
                      <br />
                      Shank turducken chuck jowl, fatback sausage capicola
                      kielbasa cupim filet mignon flank beef ribs. Prosciutto
                      pancetta shank, pork hamburger tenderloin filet mignon
                      chicken shoulder kevin rump flank turkey t-bone. Chicken
                      rump turkey capicola beef, sausage turducken alcatra.
                      Porchetta salami tongue rump ground round alcatra ball tip
                      tenderloin, swine shankle pork loin kielbasa cow.
                      Frankfurter sausage strip steak, chicken andouille ham
                      hock doner beef shankle t-bone cow ribeye. Capicola cow
                      pancetta ball tip, cupim flank turducken rump sausage
                      chicken. Jowl jerky porchetta, meatball meatloaf spare
                      ribs salami pig turkey strip steak. T-bone frankfurter
                      meatball beef ribs spare ribs shoulder strip steak bacon
                      turducken.
                      <br />
                      Shankle tail sirloin corned beef swine tongue turkey
                      chicken. Rump drumstick strip steak andouille venison
                      landjaeger short ribs capicola meatball porchetta kevin
                      fatback. Pancetta ball tip venison pig flank t-bone kevin
                      pork belly tenderloin frankfurter sausage landjaeger
                      prosciutto kielbasa ham. Rump shank turducken capicola
                      tenderloin brisket venison. Beef ribs tongue venison, ham
                      hock pork biltong cow andouille corned beef drumstick
                      shankle ham doner sausage filet mignon. Bresaola swine
                      beef pork chop, pancetta meatloaf ham ribeye chicken
                      biltong short loin. Chicken pork belly flank jowl, fatback
                      short ribs pork loin pastrami meatloaf meatball. Kielbasa
                      turducken venison hamburger jowl tri-tip pork belly ball
                      tip cow.
                    </p>
                  </div>
                </div>
                <hr />
                <div className="comment">
                  <h2>Leave a Comment</h2>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="field">
                    <textarea
                      id="comment"
                      placeholder="Comment"
                      required
                    ></textarea>

                    <input id="c_name" placeholder="Name" type="text" />

                    <input id="c_email" placeholder="Email" type="email" />

                    <input id="subject" placeholder="Subject" type="text" />
                    <div>
                      <button type="button" id="post">
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="offset-lg-1 offset-md-1 col-lg-5 col-md-5 col-sm-4 col-xsm-4">
              <div className="blog_sidebar">
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

              <div className="blog_sidebar2" style={{ marginTop: 50 }}>
                <div>
                  <div className="cat_title">
                    <h4>Tags</h4>
                  </div>
                  <div className="category_list2">
                    <button>Injuries</button>
                    <button>Treatments</button> <button>Physiotherapy</button>
                    <button>Massage therapy</button>
                    <button>Chiropratic</button>
                    <button>Body pain</button>
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
