import React from "react";
import doc_1 from "./experts_images/doc-1.jpg";
import doc_2 from "./experts_images/doc-2.jpg";
import doc_3 from "./experts_images/doc-3.jpg";
import doc_4 from "./experts_images/doc-4.jpg";
import doc_5 from "./experts_images/doc-5.jpg";
import doc_6 from "./experts_images/doc-6.jpg";
import doc_7 from "./experts_images/doc-7.jpg";
import doc_8 from "./experts_images/doc-8.jpg";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./wov.css";
export default function wwdo() {
  return (
    <div className="contain_2">
      <Container>
        <div className="row">
          <div className="head">
            <h1>Meet Our Experts</h1>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="div_1">
              <div className="i_div">
                <img src={doc_1} alt="doc-1" />
              </div>
              <div className="content">
                <h3>Jane Doe</h3>
                <h4>Physiotherapist</h4>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.Praesent commodo cursus magna, vel scelerisque
                  nisl consectetur et.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="div_1">
              <div className="i_div">
                <img src={doc_2} alt="doc_2"/>
              </div>
              <div className="content">
                <h3>John Alex</h3>
                <h4>Physiotherapist</h4>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.Praesent commodo cursus magna, vel scelerisque
                  nisl consectetur et.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="div_1">
              <div className="i_div">
                <img src={doc_3} alt="doc_3" />
              </div>
              <div className="content">
                <h3>Mike Smith</h3>
                <h4>Physiotherapist</h4>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.Praesent commodo cursus magna, vel scelerisque
                  nisl consectetur et.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="div_1">
              <div className="i_div">
                <img src={doc_4} alt="doc_4" />
              </div>
              <div className="content">
                <h3>Dr. Jehrome</h3>
                <h4>Physiotherapist</h4>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.Praesent commodo cursus magna, vel scelerisque
                  nisl consectetur et.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="div_1">
              <div className="i_div">
                <img src={doc_5} alt="doc-5" />
              </div>
              <div className="content">
                <h3>Sara Jane</h3>
                <h4>Physiotherapist</h4>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.Praesent commodo cursus magna, vel scelerisque
                  nisl consectetur et.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="div_1">
              <div className="i_div">
                <img src={doc_6} alt="doc-6" />
              </div>
              <div className="content">
                <h3>Dr. Marry</h3>
                <h4>Physiotherapist</h4>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.Praesent commodo cursus magna, vel scelerisque
                  nisl consectetur et.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="div_1">
              <div className="i_div">
                <img src={doc_7} alt="doc-7" />
              </div>
              <div className="content">
                <h3>Dr. Michael</h3>
                <h4>Physiotherapist</h4>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.Praesent commodo cursus magna, vel scelerisque
                  nisl consectetur et.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="div_1">
              <div className="i_div">
                <img src={doc_8} alt="doc-8" />
              </div>
              <div className="content">
                <h3>Dr. Krake</h3>
                <h4>Physiotherapist</h4>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.Praesent commodo cursus magna, vel scelerisque
                  nisl consectetur et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
