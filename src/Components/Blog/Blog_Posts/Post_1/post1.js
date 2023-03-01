import React from "react";
import "./post1.css";
import Container from "react-bootstrap/Container";
import post1 from "../../Images/post1.jpg";

export default function post_1() {
  return (
    <div>
      <div className="header_div11">
        <Container>
          <h1>How Physiotherapists Help Sports Energy</h1>
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
                  <div className="blog_info">
                    <p>
                      Tri-tip ribeye shoulder sirloin pork chop t-bone. Venison
                      ground round strip steak jowl rump biltong. Tenderloin
                      filet mignon turducken shank cow. Ball tip cow capicola
                      hamburger tenderloin, biltong jerky chuck turducken
                      kielbasa corned beef. Turducken shankle meatball, spare
                      ribs boudin cow landjaeger venison ham hock strip steak
                      pork chop kielbasa fatback. Frankfurter fatback filet
                      mignon shoulder short loin, meatball bresaola rump short
                      ribs salami pork loin bacon landjaeger chuck. <br />
                      Strip steak sausage cow, tenderloin kevin pork loin pork
                      chop venison ground round capicola spare ribs fatback
                      porchetta picanha. Boudin ball tip tail pork belly shank
                      tri-tip corned beef cupim landjaeger. Boudin kevin
                      drumstick, doner brisket leberkas frankfurter tongue shank
                      pork loin tail. Pig andouille capicola sausage, turducken
                      porchetta spare ribs short loin strip steak meatloaf flank
                      picanha fatback hamburger pork chop. Short ribs ham hock
                      kevin shank. Beef ribs venison prosciutto cupim sausage
                      hamburger sirloin salami t-bone kevin meatloaf short ribs
                      turducken tongue shank.
                      <br />
                      Boudin kevin drumstick, doner brisket leberkas frankfurter
                      tongue shank pork loin tail. Pig andouille capicola
                      sausage, turducken porchetta spare ribs short loin strip
                      steak meatloaf flank picanha fatback hamburger pork chop.
                      Short ribs ham hock kevin shank. Beef ribs venison
                      prosciutto cupim sausage hamburger sirloin salami t-bone
                      kevin meatloaf short ribs turducken tongue shank.Turducken
                      shankle meatball, spare ribs boudin cow landjaeger venison
                      ham hock strip steak pork chop kielbasa fatback.
                      Frankfurter fatback filet mignon shoulder short loin,
                      meatball bresaola rump short ribs salami pork loin bacon
                      landjaeger chuck.
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
