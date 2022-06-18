import React from "react";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="footer text-center text-lg-start text-dark">
        <section
          className="d-flex justify-content-between p-4 text-white"
          style={{ backgroundColor: "#198754" }}
        >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-white me-4">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a className="text-dark">News-Event</a>
                </p>
                <p>
                  <a className="text-dark">Achievement</a>
                </p>
                <p>
                  <a className="text-dark">Contact Us</a>
                </p>
                <p>
                  <a className="text-dark">About Us</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width:
                      "60px",
                    backgroundColor: "#7c4dff",
                    height:
                      "2px",
                  }}
                />
                <p>
                  <i className="fas fa-home mr-3"></i> UDHNA | UDHNAGAM | VARACHHA | KADODARA
                </p>
                <Link
                  className="mb-4 mt-0 d-inline-block mx-auto text-decoration-none text-dark"
                  to="mailto:gurukrupau20@gmail.com"
                >
                  <i className="fas fa-envelope mr-3 "></i> gurukrupau20@gmail.com
                </Link>
                <Link className="mb-4 mt-0 d-inline-block mx-auto text-decoration-none text-dark"
                  to="tel:+91 79 69071111, +91 9153831111">
                  <i className="fas fa-phone mr-3"></i> +91 79 69071111, +91 9153831111
                </Link>
                
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
          2022 All Rights Reserved by Shree Gurukrupa Vidhya Sankul
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;

