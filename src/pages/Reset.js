import React from "react";
import NormalHeader from "./../components/NormalHeader.js";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../hooks/useAuth.js";
import Bg from "./../assets/images/loginandsignupbg.png";
import Footer from "../components/Footer.js";
import Zoom from "react-reveal/Zoom";

const Reset = () => {
  const { allAuthInfo } = useAuth();
  const { getEmail, email, setError, passwordReset, error } = allAuthInfo;
  const history = useHistory();
  return (
    <>
      <div
        className="w-100 text-white"
        style={{ background: `url(${Bg})`, minHeight: "55vh" }}
      >
        <NormalHeader></NormalHeader>
        <Zoom>
          <div
            style={{ marginTop: "80px", paddingBottom: "50px" }}
            className="text-center form-container mt-5 mx-auto pt-5"
          >
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                passwordReset()
                  .then(() => {
                    history.push("./login");
                    alert(`password reset email has been sent to ${email}`);
                  })
                  .catch((err) => {
                    setError(err.message);
                  });
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Enter Your Email Address to Reset Password{" "}
                </Form.Label>
                <p className="text-danger">{error}</p>
                <Form.Control
                  onBlur={getEmail}
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Button className="py-2 px-4" variant="primary" type="submit">
                SEND
              </Button>
            </Form>
          </div>
        </Zoom>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Reset;
