import React from "react";
import { Col, Card, Container, Row } from "react-bootstrap";
import "./../assets/css/home.css";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Service from "../components/Service.js";
import BG from "../assets/images/home-bg.jpg";
import "./../assets/css/home.css";
import useAuth from "../hooks/useAuth.js";

const Home = () => {
  const { blogs } = useAuth();
  return (
    <div>
      {/* Hero area */}
      <Slide left>
        <div className="vh-100 d-flex align-items-center hero-area">
          <Container>
            <Row className="">
              <Col className="container-column">
                <Slide left>
                  <Zoom right cascade>
                    <h6 className="greeting">Welcome to Hotel Booking</h6>
                  </Zoom>
                  <Zoom right cascade>
                    <h1 className="title">We are here for your care</h1>
                  </Zoom>
                  <Zoom right cascade>
                    <p className="desc">
                      We are focused to ensure your travelling and journey safe
                      and enjoyable. You will help you to find a good hotel and
                      best quality of room. So that you can feel comfort
                    </p>
                  </Zoom>
                  <Zoom>
                    <button className="btn btn-primary appointment rounded-pill">
                      Let's Book Now
                    </button>
                  </Zoom>
                </Slide>
              </Col>
              <Col className="blank"></Col>
            </Row>
          </Container>
        </div>
      </Slide>
      <div
        id="services"
        style={{
          background: `linear-gradient(#020000c4,#020000c4), url(${BG}) fixed`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container style={{ padding: "80px 15px" }}>
          <h1 className="text-center text-white">Our Services</h1>
          <p className="text-center text-muted mb-4">
            In this section you can find all of our featured health care related
            services
          </p>

          <Service />
        </Container>
      </div>
      <div className="priority">
        <Container className="d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h1 className="fs-1 text-primary fw-bold">
              Your Health is Our Priority
            </h1>
            <p className="text-white">
              We can manage your dream building A small river named Duden flows
              by their place
            </p>
            <button className="btn btn-primary py-2 px-4 appointment rounded-pill">
              Make a appointment
            </button>
          </div>
        </Container>
      </div>
      <div className="blogs">
        <Container className="py-5">
          <h1 className="text-center fs-1">Our Blogs</h1>
          <p className="text-center">
            You can find every single updates here. If you interested to read
            blogs here few blogs for you start reading
          </p>
          <div>
            <Row>
              {blogs?.map((blog) => {
                const { _id, title, article, img } = blog;
                return (
                  <Col key={_id} className="my-3" md={6} lg={4}>
                    <Zoom>
                      <Card>
                        <Card.Img
                          height="250px"
                          style={{ objectFit: "cover" }}
                          variant="top"
                          src={img}
                        />
                        <Card.Body>
                          <Card.Title>
                            <h4 className="text-dark">{title.slice(0, 50)}</h4>
                          </Card.Title>
                          <Card.Text>
                            <p
                              className="text-muted"
                              style={{ minHeight: "60px" }}
                            >
                              {article.slice(0, 150)}
                            </p>
                          </Card.Text>
                          <button className="w-100 btn btn-primary">
                            Read More
                          </button>
                        </Card.Body>
                      </Card>
                    </Zoom>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
