import React from "react";
import "./../assets/css/footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Zoom from "react-reveal/Zoom";

import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="py-4 pt-5 gradient">
        <Container>
          <Row>
            <Col lg md={3} className="mb-sm-3">
              <Zoom>
                <div>
                  <h3>HOTEL BOOKING</h3>
                  <p className="h-desc">
                    we are focused to ensure your journey and touring is
                    enjoyable.
                  </p>
                  <ul className="list-unstyled social-icons d-flex">
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </li>
                  </ul>
                </div>
              </Zoom>
            </Col>
            <Col lg md={2} className="mb-sm-3">
              <Zoom>
                <div>
                  <h3>Links</h3>
                  <ul className="list-unstyled footer-link">
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                      <Link to="/home">Services</Link>
                    </li>
                  </ul>
                </div>
              </Zoom>
            </Col>

            <Col lg md={4}>
              <Zoom>
                <div>
                  <h3>Reach Out Us?</h3>

                  <ul className="list-unstyled contact-info">
                    <li>
                      <Row>
                        <Col md={1}>
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </Col>
                        <Col md={10}>
                          <span className="">Naogaon,Rajshahi,Bangladesh</span>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md={1}>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </Col>
                        <Col md={10}>
                          <span className="">coding.club.pro@gmail.com</span>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md={1}>
                          <FontAwesomeIcon icon={faPhone} />
                        </Col>
                        <Col>
                          <span className="">
                            Helpline: 01763251119 (10:00AM to 10.00PM)
                          </span>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </div>
              </Zoom>
            </Col>
            <Col lg md={3}>
              <Zoom>
                <div>
                  <img
                    width="100%"
                    src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png"
                    alt=""
                  />
                </div>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
      <p className="text-center m-0 py-3 copyright">
        Copyright © All Reserved. 2021
      </p>
    </div>
  );
};

export default Footer;
