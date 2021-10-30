import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://afternoon-citadel-33920.herokuapp.com/services")
      .then((res) => {
        setServices(res.data);
      });
  }, []);

  return (
    <Row>
      {services?.map((service) => {
        return <SingleService service={service} key={service._id} />;
      })}
    </Row>
  );
};

const SingleService = ({ service }) => {
  const { title, _id, img, desc, price, rating, totalReviw } = service;
  return (
    <Col className="my-3" md={6} lg={4}>
      <Zoom>
        <Card>
          <Card.Img style={{ height: "250px" }} variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <h4>{title}</h4>
            </Card.Title>
            <Card.Text>
              <p className="pb-0 mb-0">{desc.slice(0, 100)}</p>
            </Card.Text>
            <Card.Title>
              <h4 style={{ minHeight: "60px" }}>PRICE:{price}$</h4>
            </Card.Title>
            <NavLink to={`/service/${_id}`} className="w-100 btn btn-primary">
              Book Now
            </NavLink>
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
};

export default Service;
