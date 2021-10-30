import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import NormalHeader from "./../components/NormalHeader.js";
import useAuth from "../hooks/useAuth.js";
import Bg from "./../assets/images/loginandsignupbg.png";
import Footer from "../components/Footer.js";
import Zoom from "react-reveal/Zoom";

const Signup = () => {
  const history = useHistory();
  const { allAuthInfo } = useAuth();
  const {
    getPhoto,
    setNameAndImage,
    emailVerify,
    setError,
    getName,
    singUp,
    logOut,
    getEmail,
    getPassword,
    error,
  } = allAuthInfo;

  return (
    <>
      <NormalHeader />
      <div
        style={{ background: `url(${Bg}) fixed` }}
        className="text-center text-white mt-lg-5 pt-5 mb-0"
      >
        <Zoom>
          <div>
            <h2>Please Register</h2>
            <p className="mt-2">Register with Email & Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="form-container mx-auto">
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  singUp()
                    .then((result) => {
                      setNameAndImage();
                      emailVerify();
                      alert("Registration has been successful! Please Login");
                      logOut();
                      history.push("/login");
                    })
                    .catch((err) => {
                      setError(err.message);
                    });
                }}
              >
                <Row>
                  <Col className="text-start">
                    <Form.Label htmlFor="name" visuallyHidden>
                      Your Name
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        required
                        onBlur={getName}
                        type="text"
                        autoComplete="current-name"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-start">
                    <Form.Label htmlFor="email" visuallyHidden>
                      Your Email Address
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        required
                        onBlur={getEmail}
                        type="email"
                        autoComplete="current-email"
                        id="email"
                        placeholder="Enter your email address"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="text-start">
                    <Form.Label htmlFor="password" visuallyHidden>
                      Your Password
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        required
                        onBlur={getPassword}
                        type="password"
                        autoComplete="current-password"
                        id="password"
                        placeholder="Enter your password"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-start">
                    <Form.Label htmlFor="name" visuallyHidden>
                      Your Profile photo URL
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        required
                        onBlur={getPhoto}
                        type="text"
                        autoComplete="current-text"
                        id="photo"
                        placeholder="Enter valid photo url"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <button
                  type="submit"
                  className="btn text-white custom-btn mt-2 w-100"
                >
                  Sign up
                </button>
              </Form>
            </div>
            <p className="mt-5 mb-0 pb-5 ">
              Already have an account?
              <NavLink className="text-decoration-none" to="/login">
                {" "}
                Please login!{" "}
              </NavLink>
            </p>
          </div>
        </Zoom>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Signup;
